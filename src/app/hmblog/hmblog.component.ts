import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { UserService } from '../user.service';
import { user } from '../user.model';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HmService } from '../hm.service';
import { HotelM } from '../hm.model';
import * as FileSaver from 'file-saver';

export interface DiscountOption {
  id: string;
  enabled: boolean;
  year: number;
  scoreLabel: string;
  scoreValue: string;
  amount: number;
  zhTemplate: string;
  enTemplate: string;
  /** 左侧列表短描述（固定条款用） */
  label?: string;
  /** 自定义条款：直接使用中英文全文，不再套用年份/分数模板 */
  isCustom?: boolean;
}

export type ContractTab = 'undergrad' | 'masters' | 'halfDiy';

@Component({
  selector: 'app-hmblog',
  templateUrl: './hmblog.component.html',
  styleUrls: ['./hmblog.component.scss']
})
export class HmblogComponent implements OnInit, OnDestroy {
  user: user[] = [];
  hotels: HotelM[] = [];
  hotel: HotelM;
  managerID: any;
  name: String;
  location: String;
  phone: String;
  price: String;
  private hotelMSub: Subscription;

  activeTab: ContractTab = 'masters';
  logoUrl = 'assets/hmblog/logo.jpeg';
  logoDataUrl = '';

  agreementNumber = '100297DM';
  admissionYear = 2027;
  totalFee = 18000;
  deposit = 8000;
  secondPayment = 10000;
  refundAmount = 3000;
  paymentDeadlineDays = 7;

  discounts: DiscountOption[] = [
    {
      id: 'gre',
      enabled: true,
      year: 2026,
      scoreLabel: 'GRE',
      scoreValue: '325',
      amount: 1000,
      zhTemplate: '{{year}}年秋季学期GRE达到{{score}}分及以上，减免美元 {{amount}} 整',
      enTemplate: 'For the fall semester of {{year}}, if party B GRE reaches {{score}} or above, discount of USD {{amount}},'
    },
    {
      id: 'gpa',
      enabled: false,
      year: 2026,
      scoreLabel: 'GPA',
      scoreValue: '3.7',
      amount: 2000,
      zhTemplate: '{{year}} 年秋季学期综合 GPA 达到 {{score}}，减免美元 {{amount}} 整',
      enTemplate: 'For the fall semester of {{year}}, if party B overall GPA reaches {{score}}, discount of USD {{amount}},'
    },
    {
      id: 'recLetter',
      enabled: false,
      year: 2026,
      scoreLabel: '',
      scoreValue: '',
      amount: 1000,
      label: '申请周期内获得美国或中国世界500强企业出具的推荐信',
      zhTemplate: '委托方能够在申请周期内获得一封由美国或中国世界500强企业出具的推荐信，减免美元 {{amount}} 整',
      enTemplate: 'Party A can obtain a letter of recommendation from a Global 500 company in the US or China during the application period, discount of USD {{amount}}.'
    },
    {
      id: 'school',
      enabled: false,
      year: 2026,
      scoreLabel: '',
      scoreValue: '',
      amount: 2000,
      label: '本科毕业于大陆 985/211，或美国 U.S. News 排名前 10 大学',
      zhTemplate: '委托方本科毕业于中国大陆985/211高校，或本科就读于美国《U.S. News》排名前10的大学，减免美元{{amount}} 整。',
      enTemplate: 'Party A has obtained an undergraduate degree from a “985” or “211” university in mainland China, or from a university ranked in the Top 10 of the U.S. News & World Report Best Colleges ranking in the United States, discount of USD {{amount}}'
    }
  ];

  customZhDraft = '';
  customEnDraft = '';
  private customDiscountSeq = 1;

  // —— 半DIY合同字段 ——
  diyTotalFee = 8000;
  diyRebateEnabled = false;
  diyRebateProgramZh =
    '宾夕法尼亚大学（University of Pennsylvania）Master of Science in Engineering in Computer and Information Science项目';
  diyRebateProgramEn =
    'the Master of Science in Engineering in Computer and Information Science program at the University of Pennsylvania';
  diyRebateAmount = 3000;
  diyRebateDays = 10;
  diyServiceTimelineEnabled = false;
  diyFeedbackDays = 2;

  // —— 本科合同字段 ——
  ugTotalFee = 20000;
  ugRefundAmount = 16000;
  ugAdmissionYear = 2026;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public userService: UserService,
    private http: HttpClient,
    public hmService: HmService,
    private sanitizer: DomSanitizer
  ) {
    this.route.queryParams.subscribe(params => {
      this.managerID = params['managerID'];
    });
  }

  ngOnInit() {
    this.loadLogoAsDataUrl();
    this.http.get<{user: user[]}>('http://localhost:3000/users').subscribe((userData) => {
      this.user = userData.user;
    });
    this.http.get<{hotels: HotelM[]}>('http://localhost:3000/hotels').subscribe((Data) => {
      this.hotels = Data.hotels;
      for (let h of this.hotels) {
        if (h.userAccount === this.managerID) {
          this.hotel = h;
          this.name = this.hotel.name;
          this.location = this.hotel.location;
          this.phone = this.hotel.phone;
          this.price = this.hotel.price;
        }
      }
    });
    this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe((hotels: HotelM[]) => {
      this.hotels = hotels;
    });
  }

  private loadLogoAsDataUrl() {
    this.http.get(this.logoUrl, { responseType: 'blob' }).subscribe(
      (blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.logoDataUrl = reader.result as string;
        };
        reader.readAsDataURL(blob);
      },
      () => {
        this.logoDataUrl = '';
      }
    );
  }

  /** 确保拿到可用于 jsPDF 的 logo data URL */
  private ensureLogoDataUrl(): Promise<string> {
    const self = this;
    if (this.logoDataUrl && this.logoDataUrl.indexOf('data:') === 0) {
      return Promise.resolve(this.logoDataUrl);
    }
    return new Promise(function (resolve) {
      self.http.get(self.logoUrl, { responseType: 'blob' }).subscribe(
        (blob) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            self.logoDataUrl = reader.result as string;
            resolve(self.logoDataUrl);
          };
          reader.onerror = () => resolve('');
          reader.readAsDataURL(blob);
        },
        () => resolve('')
      );
    });
  }

  selectTab(tab: ContractTab) {
    this.activeTab = tab;
  }

  get contractTitle(): string {
    if (this.activeTab === 'undergrad') {
      return '本科申请合同';
    }
    if (this.activeTab === 'halfDiy') {
      return '半DIY申请合同';
    }
    return '硕士申请合同';
  }

  formatMoney(n: number | string): string {
    const num = Number(n);
    if (isNaN(num)) {
      return String(n);
    }
    return num.toLocaleString('en-US');
  }

  fillDiscountText(tpl: string, d: DiscountOption): string {
    if (d.isCustom) {
      return tpl || '';
    }
    return tpl
      .replace(/\{\{year\}\}/g, String(d.year))
      .replace(/\{\{score\}\}/g, d.scoreValue)
      .replace(/\{\{amount\}\}/g, this.formatMoney(d.amount));
  }

  getEnabledDiscounts(): DiscountOption[] {
    return this.discounts.filter(d => d.enabled);
  }

  addCustomDiscount() {
    const zh = (this.customZhDraft || '').trim();
    const en = (this.customEnDraft || '').trim();
    if (!zh && !en) {
      alert('请至少填写中文或英文减免条款。');
      return;
    }
    this.discounts.push({
      id: 'custom-' + this.customDiscountSeq++,
      enabled: true,
      year: this.admissionYear,
      scoreLabel: '',
      scoreValue: '',
      amount: 0,
      zhTemplate: zh,
      enTemplate: en,
      isCustom: true
    });
    this.customZhDraft = '';
    this.customEnDraft = '';
  }

  removeDiscount(d: DiscountOption) {
    if (!d.isCustom) {
      return;
    }
    this.discounts = this.discounts.filter(item => item.id !== d.id);
  }

  syncSecondFromTotal() {
    this.secondPayment = Number(this.totalFee) - Number(this.deposit);
  }

  private escapeHtml(text: string): string {
    if (text == null) {
      return '';
    }
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  private logoSrc(): string {
    return this.logoDataUrl || this.logoUrl;
  }

  private blank(): string {
    return '&nbsp;';
  }

  buildContractBodyHtml(): string {
    if (this.activeTab === 'undergrad') {
      return this.buildUndergradContractHtml();
    }
    if (this.activeTab === 'halfDiy') {
      return this.buildHalfDiyContractHtml();
    }
    return this.buildMastersContractHtml();
  }

  private buildPlaceholderHtml(): string {
    return `
<div class="contract">
  <div class="contract-header" style="text-align:center;margin-bottom:20px;">
    <img src="${this.logoSrc()}" alt="MICHI ACADEMY" style="height:90px;"/>
    <h2 style="margin:12px 0 4px;">MICHI ACADEMY INC</h2>
    <h3 style="margin:4px 0;">${this.contractTitle}</h3>
  </div>
  <p style="text-align:center;color:#666;padding:40px 20px;">请选择合同类型。</p>
</div>`;
  }

  /** 完整还原《本科合同模板.pdf》；无费用减免条款 */
  private buildUndergradContractHtml(): string {
    const fee = this.formatMoney(this.ugTotalFee);
    const refund = this.formatMoney(this.ugRefundAmount);
    const year = this.ugAdmissionYear;
    const blank = this.blank();
    const ag = this.escapeHtml((this.agreementNumber || '').trim()) || blank;

    return `
<div class="contract">
  <div class="contract-header" style="text-align:center;margin-bottom:16px;">
    <img src="${this.logoSrc()}" alt="MICHI ACADEMY" style="height:96px;"/>
    <div style="font-size:14pt;font-weight:bold;margin-top:8px;">MICHI ACADEMY INC</div>
  </div>

  <h2 style="text-align:center;font-size:16pt;">自费出国留学咨询服务委托协议书</h2>
  <h3 style="text-align:center;font-size:12pt;font-weight:normal;font-style:italic;">
    Agreement for Self-funded Study Abroad Consulting Services
  </h3>

  <table class="meta" border="1" cellpadding="6" cellspacing="0" width="100%">
    <tr><td width="48%">协议编号<br/>AGREEMENT NUMBER</td><td>${ag}</td></tr>
    <tr><td>委托方协议书签署人姓名<br/>Party A’s Name</td><td>${blank}</td></tr>
    <tr><td>委托方协议书签署人有效证件号码<br/>Party A’s ID</td><td>${blank}</td></tr>
    <tr><td>本协议书受益人姓名<br/>Beneficiary</td><td>${blank}</td></tr>
    <tr><td>本协议书受益人有效证件号码<br/>Beneficiary’s ID</td><td>${blank}</td></tr>
    <tr><td>本协议书受益人与委托方关系<br/>Relationship with Party A</td><td>${blank}</td></tr>
    <tr><td>委托方有效联系电话<br/>Party A’s Contact info</td><td>${blank}</td></tr>
    <tr><td>委托方有效住址<br/>Party A’s Address</td><td>${blank}</td></tr>
    <tr><td>委托方有效邮箱地址<br/>Party A’s Email</td><td>${blank}</td></tr>
    <tr><td>本协议书编号<br/>Contract Serial Number</td><td>${ag}</td></tr>
    <tr><td>受托方<br/>Party B</td><td>MICHI ACADEMY INC</td></tr>
    <tr><td>受托方有效联系电话<br/>Party B’s Mobile</td><td>949-561-7828</td></tr>
    <tr><td>受托方有效地址<br/>Party B’s Address</td><td>214 Duffield St 34A, Brooklyn, NY, 11201</td></tr>
    <tr><td>受托方有效邮箱地址<br/>Party B’s Email</td><td>INFO@MICHIACADEMY.COM</td></tr>
    <tr><td>受托方负责人<br/>Party B’s Agent</td><td>Yuxin Zhang</td></tr>
  </table>

  <p>委托方声明：委托方授权代理人对本协议书约定的文件，包括但不限于补充协议书、通知书、告知函、具结书、书面承诺等，有签署、认可、确认的权利，均可视为本人的行为，委托方承认其行为效力，并确认以上联系方式为留学服务联络的有效途径。</p>
  <p class="en">Party A’s statement: Party A authorizes the agent to sign, approve and confirm the documents stipulated in this agreement, including but not limited to the supplementary agreement, notice, notification letter, acknowledgment, written commitment, etc. Party A acknowledges the validity of its actions, and confirms that the above contact information is an effective way to reach.</p>

  <p>为了维护协议书当事人的合法权益，委托方与受托方双方本着自愿、平等、协商一致的原则，就受托方接受委托方的委托提供自费出国留学咨询服务事宜，达成如下协议：</p>
  <p class="en">With regard for the legitimate rights and interests of the parties to the agreement, Party A and Party B have reached the following agreement: Party A accepts Party B to provide consulting services for studying abroad at its own expense based on the principles of voluntarism, equality and consensus:</p>

  <h3>1. 服务项目及费用</h3>
  <h4 class="en-h">1. Service items and fees</h4>
  <p>委托方申请 美国（国家/地区）留学，申请学位为学士 ，入学年为${year} 年最终以申请人托福成绩结果及申请院校录取要求为准。</p>
  <p class="en">Party A will apply study in the United States (country/region), Bachelor's degree, the admission year of ${year}. The final result will be based on the applicant's TOEFL score and the admission requirements of the applied institution.</p>
  <p>受托方向委托方提供留学前往国家/地区的协助入学申请咨询服务</p>
  <p class="en">Party B will provide Party A with consulting services in the admissions application process in the aforementioned country/region.</p>
  <p>服务包括：</p>
  <ul class="disc">
    <li>个人陈述文书创作/修改</li>
    <li>附加文书创作/修改</li>
    <li>简历创作/修改</li>
    <li>模拟面试培训</li>
    <li>申请信息答疑</li>
    <li>申请院校项目咨询</li>
    <li>申请路径规划</li>
    <li>托福语言考试辅导</li>
    <li>夏校申请</li>
  </ul>
  <p class="en">Party B will provide Party A with consulting services in</p>
  <ul class="disc en">
    <li>Personal Statement Creation/Modification</li>
    <li>Additional application essays Creation/Modification</li>
    <li>Resume Creation/Modification</li>
    <li>Mock interview training</li>
    <li>Consultation of Schools application</li>
    <li>Consultation of School list</li>
    <li>Consultation of Application plan development</li>
    <li>TOEFL test tutoring</li>
    <li>Summer School Application</li>
  </ul>
  <p>委托方向受托方缴付升学顾问咨询服务费美元 ${fee} 整，受托方为委托方申请院校办理。上述费用不包括第三方费用（第三方费用包括但不限于：护照费、院校报名/申请费、公证费、体检费、监护费、接机和住宿安排费、机票款等）。</p>
  <p class="en">Party A will pay Party B a consultation service fee of USD ${fee} for further education consulting, and Party B will provide college application service for Party A. The above fees do not include third-party fees (third-party fees include but are not limited to: passport renewal/application fee, medical examination fee, flight and accommodation arrangements, etc.).</p>
  <p>在本协议书签署后，受托方根据委托方的条件和要求推荐留学院校，双方协商确定签订《附录：选校确认书》、《增加申请院校》、《变更申请院校》等补充协议书级双方书面确认信息作为最终申请院系依据。在签订本协议后委托方需缴付受托方升学顾问咨询服务费美元 ${fee} 整。</p>
  <p class="en">Upon the signing of this agreement, Party B will recommends overseas colleges and universities accordingly based on requirements of Party A, and the two parties shall negotiate and decide whether to sign the Appendices: "Confirmation of College Selection", "Adding Colleges to Apply", "Change of Colleges to Apply for", etc. The written confirmation and information of recorded by both parties within the supplemental agreement(s) shall be used as the basis for the final application of to the department. After signing this agreement, Party A shall pay Party B’s education consulting service fee of USD ${fee}.</p>

  <h3>2. 退款</h3>
  <h4 class="en-h">2. Refund</h4>
  <p>由于各个院校每年的申请人数，录取政策等的变动，受托方不能保证委托方一定会被首院校录取。若受托方最终没有在协议书有效期范围内收到任何一所协议书约定的升学院校的录取通知书（含有条件的录取通知书），则受托方退还委托方已交付美元 ${refund} 整。</p>
  <p class="en">Due to changes in the number of applicants and admission policies of each institution each year, Party B cannot guarantee that Party A will be admitted to most preferred institution. If the entrusted party does not receive the admission notice (admission letter with conditions) from any school for further studies stipulated in the agreement within the validity period of the agreement, Party B shall fully refund the USD ${refund} that has been delivered by the entrusting party.</p>
  <p>委托方因自身原因，单方面要求解除协议书或如发生以下任何情形之一，则委托方已缴纳的留学申请咨询服务费一律不予退还，受托方不再履行任何本协议书内的权利及义务，既双方终止本服务协议书：</p>
  <p class="en">If Party A unilaterally requests to withdraw the agreement due to its own reasons or when any of the following circumstances occurs, the consulting service fee for studying abroad that Party A has paid will not be refunded, and Party B will no longer be required to perform any rights and obligations stipulated in this agreement:</p>
  <ul class="star">
    <li>委托方无正当理由拒付本协议书约定的任何一笔款项；</li>
    <li class="en">Party A refuses to pay any sum agreed in this agreement without justifiable reasons;</li>
    <li>委托方终止协议或违反本协议任何条款</li>
    <li class="en">Party A terminates the agreement in any way or violates any terms of this agreement；</li>
    <li>委托方因提供虚假材料或隐瞒任何相关实情；</li>
    <li class="en">Party A provides fake materials or conceals any relevant facts</li>
    <li>委托方被前往国家或地区使(领)馆查实有非法移民、犯罪前科等不良记录；</li>
    <li class="en">Party A was found by the embassy (consulate or other government entity) of the country or region to have a bad record of illegal immigration, criminal activity, other types of misconduct, etc.</li>
    <li>在留学申请办理过程中，如申请院校要求委托方进行面试，委托方未能及时按时面试而导致拒录；</li>
    <li class="en">In the process of applying for studying abroad, if the applicant institution requires Party A to conduct an interview, and Party A fails to interview on time, resulting in refusal of admission;</li>
    <li>在留学申请办理过程中，如申请院校要求委托方补交材料，委托方未按时交齐而导致拒录；</li>
    <li class="en">In the process of applying for studying abroad, if the applicant institution requires Party A to submit supplemental materials, and the entrusting party fails to submit all the materials on time, resulting in refusal of admission;</li>
    <li>委托方以任何原因在与受托方签约后自动放弃留学或继续接受受托方服务；</li>
    <li class="en">Party A gives up studying abroad or discontinues acceptance Party B’s services after signing the contract with Party B for any reason;</li>
    <li>委托方提供任何虚假信息或任何虚假材料;</li>
    <li class="en">The entrusting party provides any fake information or material;</li>
    <li>委托方不配合受托方任何一项与申请相关的工作并因其影响最终录取结果。</li>
    <li class="en">Party A will not cooperate with the entrusting party in any work related to the application that will affect the final admission result.</li>
  </ul>

  <h3>3. 付款方式</h3>
  <h4 class="en-h">3. Payment methods</h4>
  <p>付款方式 （委托方向受托方支付的服务费，或是委托受托方代交的学校申请费、学费等按照以下指定方式支付（除此之外的任何付费方式所带来的不利后果均由委托方承担））：</p>
  <p class="en">Payment methods (service fees paid by Party A to Party B, or school application fees, tuition fees, etc. paid by the entrusting party on behalf of the entrusted party shall be paid in accordance with the following specified methods (the adverse consequences of any other payment methods shall be borne by the entrusting party))</p>
  <ul class="star">
    <li>支付宝: 18510211741 伊昊正</li>
    <li class="en">Alipay: 18510211741 Haozheng Yi</li>
    <li>BANKE: 中国工行扬州市江都支行 张俊 6212 8811 0800 0035 691</li>
  </ul>

  <h3>4. 受托方义务</h3>
  <h4 class="en-h">4. Obligations of Party B</h4>
  <p>受托方承诺向委托方提供的出国留学信息、海外院校官方宣传介绍材料内容准确真实。如海外院校在受托方提供给委托方相应官方信息后，在海外校方官方信息做出更改的时间差内，由于信息不对等，造成双方不能同时履行任何本协议书的条款，则双方应进行协商，协商的结果以附录的形式增添至本协议书中。</p>
  <p class="en">Party B promises that the information on studying abroad and the official publicity and introduction materials of overseas colleges and universities provided to Party A are accurate and true. If the overseas colleges and universities cannot perform any of the terms of this agreement due to any changes in policy including but not limited to admissions deadlines, requirements, prerequisites, etc, Party B will not be held liable - even if such changes are untimely. After the entrusting party provides the corresponding official information to the client, the two parties shall negotiate and the results of the negotiation will be added to this agreement in the form of an appendix.</p>
  <p>受托方应协助和指导委托方准备入学申请的相关材料。</p>
  <p class="en">Party B shall assist and instruct Party A in preparing the related materials for admission applications.</p>
  <p>受托方应根据委托方所申请留学院校和留学国家/地区有关申请程序及审批时间的规定，在委托方向受托方提交完整的申请材料后，应在受托方所指定的规定时间内提交，并及时向委托方报告入学的进展、结果。</p>
  <p class="en">Party B shall, in accordance with the relevant application process and approval timeline of the institutions and countries/regions where the entrusting party applies to study abroad, submit the complete application materials to the entrusting party within the time period specified by the entrusting party. And, it will submit and report the progress and results of enrollment to the entrusting party in a timely manner.</p>
  <p>如受托方代委托方向国外院校缴纳报名费、学杂费等费用，委托方应给予受托方书面委托，受托方应向委托方提供收费方的符合法律要求的证明文件（包括但不限于：纸质或电子版学校官方收据，通知函等）。</p>
  <p class="en">If Party B pays registration fees, tuition, miscellaneous fees and/or other fees on behalf of Party A, Party A shall give Party B a written authorization, and Party A shall provide Party B with the legal requirements of the charging party (including but not limited to: paper or digital official receipts, notification letters, etc.).</p>
  <p>有关受托方代收取的上述费用的退费规定按照协议书附件或以委托方所申请的国外院校的书面通知为准。</p>
  <p class="en">In order to initiate a refund of service fee paid by Party B, please refer to the annex of the agreement or the written notice from the institution applied.</p>
  <p>委托方同时申请多所院校的，获得其中任何一所院校的录取通知书（包括有条件录取通知书），即视为受托方已履行为委托方办理申请入学的义务。</p>
  <p class="en">If Party A applies for more than one institution at the same time, and obtains the admission offer (including the conditional admission letter) from any one of the institutions, it is deemed that Party B has fulfilled the obligation.</p>

  <h3>5. 委托方义务</h3>
  <h4 class="en-h">5. Obligations of Party A</h4>
  <p>委托方向受托方送交的所有文件，材料和陈述的内容应合法，真实且有效</p>
  <p class="en">The contents of all documents, materials and statements Party A sends to Party B shall be authentic, legal and valid.</p>
  <p>委托方确认本协议书的委托事项，并按照本协议书约定按时向受托方支付相关费用。委托方应按受托方的时间规划要求，将入学所需全部材料交与受托方。</p>
  <p class="en">Party A confirms the entrusted matters in this agreement, and agrees to pays the relevant fees to Party B on time as stipulated in this agreement. Party A shall submit all the materials required for admission to Party B upon request.</p>
  <p>若委托方的院校申请需要提供专业型论述文书（包括但不限于研究论文、课程描述、艺术品描述等），则委托方需自行撰写；若受托方可为委托方进行相关翻译的， 则委托方需要按照实际文书情况缴纳额外翻译费用。</p>
  <p class="en">If Party A’s application for a college or university requires original copy of documents (including but not limited to research papers, course descriptions, artwork descriptions, dissertations, etc.), Party A must write by itself; If necessary, Party A needs to pay additional translation fees in accordance with the actual documents.</p>
  <p>在留学申请办理过程中，如申请院校要求委托方进行的面试，委托方应按照要求参加，若委托方因各种原因未履约参加面试，所产生的任何损失由委托方全部自行承担；如前往国家/地区的留学政策或申请留学院校的入学要求、招生程序发生变化， 委托方应根据新的要求，在受托方的规定时间范围内提供补充材料。如委托方未在受托方规定的时间范围内提供补充材料，所产生的任何损失由委托方全部自行承担。</p>
  <p class="en">In the process of applying for studying abroad, if the applicant institution requires Party A to conduct an interview, Party A shall participate in the interview as required. If Party A fails to perform the interview due to various reasons, any losses incurred shall be borne by Party A. If the policy of studying abroad in the country/region or the admission requirements and admission procedures for applying for studying abroad change, Party A shall provide supplemental materials within the time frame . If Party A fails to provide supplemental materials specified by Party B timely, any losses incurred shall be fully borne by Party A.</p>
  <p>委托方明确中止留学申请办理手续，受托方具有相关申请文书材料及录取文件的保管权且委托方不享有一切留学申请相关材料的使用权，既委托方同意放弃申请入学学年的任何海外留学院校。</p>
  <p class="en">If Party A clearly suspends the application procedures for studying abroad., Party B has the right to keep the relevant documents and its original authorship. Party A shall not reproduce the work created by Party B as Part A agrees to forfeit the application.</p>
  <p>委托方自行负责有效联系途径（联系途径包括但不限于：电话、电子邮件、公共社交软件等）的用户名（登录名）与密码的安全，并不得将该用户名及密码提供给第三方使用。若委托方的联系方式发生变更的，则须及时书面通知受托方。若委托方未在十二个小时内通知受托方的，则上述联系方式视为有效的确认途径。</p>
  <p class="en">Party A is responsible for the security of the user name (login name) and password of effective contact channels (including but not limited to: telephone, email, social media, etc.), and shall not provide such user name and password to the third parties. If the contact information of Party A is changed, Party B must be notified in writing in a timely manner. If Party A fails to notify the entrusting party within 12 hours, any losses incurred shall be fully borne by Party A.</p>
  <p>委托方全权委托受托方提供留学信息并进行咨询服务，在本协议书生效期内委托方保证不委托除受托方之外的其他第三方机构或个人以有偿或无偿的方式为委托方提供留学信息并进行咨询服务，如委托方在未经受托方书面同意的情况下在本协议书生效期内委托方委托了除受托方之外的其他第三方机构或个人以有偿或无偿的方式为委托方提供留学信息并进行咨询服务，那么受托方有权利终止本协议书并不予委托方任何退款且委托方支付受托方全部留学规划服务费。</p>
  <p class="en">Party A has the sole authority to entrust Party B to provide study abroad information and provide consulting services. During the valid period of this agreement, Party A shall assures that it will not engage any third-party institutions or individuals other than Party B to be entrusted in a paid or free manner.If Party A, without the written consent of the entrusting party, entrusts other third-party institutions or individuals other than Party B within the valid period of this agreement to provide paid or unpaid consulting services, then Party B has the right to terminate this agreement without issuing any refund to Party A, and Party A shall pay all the study abroad planning service fees to Party B.</p>

  <h3>6. 违约责任</h3>
  <h4 class="en-h">6. default</h4>
  <p>受托方和委托方应履行协议书中的全部条款，违约方应承担相应的违约责任。</p>
  <p class="en">Party B and Party A shall perform all the terms of the agreement, and the breaching party shall bear the corresponding liability for the breach of contract.</p>
  <p>受托方应当按照本协议书为委托方提供约定服务，如因受托方之过错给委托方造成损失的，则应当赔偿由此造成的委托方的直接损失，但赔偿的损失额度以受托方收取的服务费为限。</p>
  <p class="en">Party B shall provide Party A with the agreed services in accordance with this agreement. If losses are caused to Party A due to the fault of Party B, Party B shall compensate for the direct losses caused thereby, but the amount of compensation shall be limited to the service fee charged by Party B.</p>

  <h3>7. 保密条款</h3>
  <h4 class="en-h">7. Privacy</h4>
  <p>委托方未经过受托方书面同意不得向第三方（包括新闻界人士）公开和披露任何与本协议书相关的材料（材料种类包括但不限于电子类材料，邮件，书面纸质材料等）。双方也促使各自代表不向第三方（包括新闻界人士）公开或披露任何与本协议书相关的材料（材料种类包括但不限于电子类材料，邮件，书面纸质材料等）。委托方与受托方双方有责任严格遵守保密条款，该条款在本协议书执行中及终止后始终有效。</p>
  <p class="en">Party A shall not disclose any materials related to this agreement (including but not limited to electronic materials, emails, and written paper materials) to third parties (including the press) without the written consent of Party B. Both parties also urge their representatives not to disclose any materials related to this agreement (including but not limited to electronic materials, emails, written paper materials, etc.) to third parties (including the press). Both parties are obliged to strictly abide by the confidentiality clause, which is always valid during the execution of this agreement and after its termination.</p>

  <h3>8. 不可抗力</h3>
  <h4 class="en-h">8. force majeure</h4>
  <p>因不可抗力不能履行协议书的，根据不可抗力的影响，部分或全部免除责任。但法律另有规定的除外，当事人延迟履行后发生不可抗力的，不能免除责任。本协议书所称不可抗力，是指不能预见、不能避免并不能克服的客观情况，如重大自然灾害、瘟疫、战争、骚乱等。</p>
  <p class="en">If the agreement cannot be performed due to force majeure, the liability shall be partially or fully exempted according to the influence of force majeure. However, unless otherwise provided by law, if force majeure occurs after the parties delay performance, they cannot be exempted from liability stipulated in this agreement.The so-called force majeure refers to objective situations that cannot be foreseen, avoided and overcome, such as major natural disasters, plagues, wars, riots, etc.</p>
  <p>当事人一方因不可抗力不能履行协议书的，应当立即通知对方，说明不可抗力的发生日期、事件性质，预计持续的时间及对该方履行本协议书的影响，并应当自不可抗力发生之日起四十八小时内提供证明（此证明应当具备法律效力）。</p>
  <p class="en">If a party is unable to perform the agreement due to force majeure, it shall immediately notify the other party, stating the date of occurrence of the force majeure, the nature of the event, the expected duration and the impact on the party's performance of the agreement, and the date of the occurrence of the force majeure shall be provided by a certificate within 48 hours from the start (this certificate should have legal effect).</p>
  <p>对不可抗力所造成的影响，双方应及时协商解决办法和补救措施。因不可抗力不能履行协议书的一方，应尽力采取合理措施减轻可能给对方造成的损失，否则应对由此而扩大的损失承担赔偿责任。</p>
  <p class="en">For the impact caused by force majeure, both parties shall negotiate solutions and remedial measures in a timely manner. The party that is unable to perform the agreement due to force majeure shall try its best to take reasonable measures to reduce the losses that may be caused to the other party, otherwise it shall be liable for the increased losses.</p>

  <h3>9.适用的法律及争议解决方法及最终解释权</h3>
  <h4 class="en-h">9.Applicable laws and dispute resolution methods and final interpretation rights</h4>
  <p>本协议书的履行、解释及争议均适用于美国加利福尼亚州相关地方法.。</p>
  <p class="en">The performance, interpretation and disputes of this Agreement shall be applicable to the relevant local laws of California, the United States.</p>
  <p>双方在履行本协议书中如发生争议，应双方先行协商解决。如协商不成， 双方均有权向有管辖权的政府法务部门提出诉讼。</p>
  <p class="en">If there is a dispute between the two parties in the performance of this agreement, the two parties should first negotiate and resolve it. If the negotiation fails, both parties have the right to file a lawsuit with the competent government legal department</p>
  <p>受托方享有对本协议书的一切最终解释权。</p>
  <p class="en">Party B has the final right to interpret this agreement.</p>

  <h3>10.议书的附录、补充、变更、修改</h3>
  <h4 class="en-h">10.Appendices, Supplements, Changes and Amendments to the Agreement</h4>
  <p>如委托方未委托受托方进行指定学校的入学申请服务，本协议书第三条及相关收退费条款对当事人双方皆不具有约束力。</p>
  <p class="en">If Party A does not entrust Party B to carry out the admission application service of the designated school, Article 3 of this agreement and related terms of fee collection and refund are not binding on both parties.</p>
  <p>本协议书签订后，将代替之前与本协议书有关的所有书面或口头承诺，同时任何对本协议书或协议书附件的修订、补充、增加等均应采取书面并经各方签订，否则不能生效。经双方协商一致且书面确定协商结果，可以变更协议书并签署补充协议书。</p>
  <p class="en">After the signing of this agreement, it will replace all previous written or oral commitments related to this agreement. Any amendments, supplements, additions, etc. to this agreement or its annexes shall be in writing and approved by all parties. including signed endorsement, otherwise it will not take effect. After both parties reach an agreement and the negotiation result is confirmed in writing, the agreement can be changed and a supplemental agreement can be signed.</p>
  <p>本协议书的一切附录与本协议书本身具有同等法律效益。如双方在协议执行中以任何原因向对方提出解除或更改本协议书的任意附录，需要以书面的形式通知对方，并在双方书面同意后进行更改或解除。</p>
  <p class="en">All appendices to this agreement have the same legal effect as this agreement itself. If both parties propose to the other party to cancel or change any appendix of this agreement for any reason during the execution of the agreement, they need to notify the other party in writing, and make the change or release after the written consent of both parties.</p>

  <h3>11.其他条款</h3>
  <h4 class="en-h">11.Other terms</h4>
  <p>本协议书有效期为签订协议书日起 3 年。除非双方另有约定，协议书期满自动失效。</p>
  <p class="en">This agreement is valid for three years from the date of signing. Unless otherwise agreed by both parties, the agreement will automatically expire three years from the date of signing.</p>
  <p>本协议书由经委托方或委托方的代理人签字并按压手印及受托方盖章之日起生效。</p>
  <p class="en">This agreement will take effect from the date when it is signed by Party A and Party B.</p>
  <p>本协议书正本一式两份，具有同等效力，委托方（代理人）与受托方各执一份。</p>
  <p class="en">The original agreement and its duplicate have equal validity, and Party A and Party B each hold one copy.</p>
  <p>双方履行本协议书的权利和义务后，协议书终止。</p>
  <p class="en">After both parties perform their rights and obligations in this agreement, the agreement shall be terminated.</p>
  <p>《附录：选校确认书》作为补充协议书应由委托方与受托方双方协商后确定签署，签署后与本协议书共同生效。</p>
  <p class="en">"Appendix: Confirmation of School Selection" as a supplementalry agreement should be signed by both Party A and Party B after negotiation, and will take effect together with this agreement after signing.</p>

  <h3>12.出入境及守法</h3>
  <h4 class="en-h">12.Immigration and law compliance</h4>
  <p>委托方（本协议受益人）有责任按照留学目标国家政府所颁发签证时间入境、离境；</p>
  <p class="en">The Party A (the beneficiary of this agreement) is responsible for entering and leaving the country according to the visa time period issued by the government of the destination country;</p>
  <p>由于委托方（本协议受益人）原因所造成的非法滞留均与受托方无关；委托方（本协议受益人）有责任遵守留学目标国家法律，委托方的任何违法行为均与受托方无关。</p>
  <p class="en">The illegal stay caused by Party A (the beneficiary of this agreement) has nothing to do with Party B; Party A (this agreement’s beneficiaries) are not related to Party B.</p>

  <br/>
  <p>委托方Part A signature（签字）：________________</p>
  <p>委托方代理人 Party A Agent（签字）：________________</p>
  <p>签字日期date： （mm/dd/yyyy): ________________</p>
  <p>受托方 Part B signature（签字）：________________</p>
  <p>签字日期date： （mm/dd/yyyy): ________________</p>
</div>`;
  }

  /** 完整还原《半DIY模板.pdf》；可选：有条件费用返还、服务时效及补救机制 */
  private buildHalfDiyContractHtml(): string {
    const fee = this.formatMoney(this.diyTotalFee);
    const year = this.admissionYear;
    const blank = this.blank();
    const ag = this.escapeHtml((this.agreementNumber || '').trim()) || blank;
    const rebateAmt = this.formatMoney(this.diyRebateAmount);
    const rebateDays = this.diyRebateDays;
    const feedbackDays = this.diyFeedbackDays;
    const progZh = this.escapeHtml((this.diyRebateProgramZh || '').trim()) || '________________';
    const progEn = this.escapeHtml((this.diyRebateProgramEn || '').trim()) || '________________';

    let rebateBlock = '';
    if (this.diyRebateEnabled) {
      rebateBlock = `
  <h3>有条件费用返还</h3>
  <h4 class="en-h">Conditional Fee Rebate</h4>
  <p>若委托方成功获得${progZh}正式录取通知书，受托方应向委托方返还咨询服务费 美金${rebateAmt}元整。委托方提供正式录取通知书并履行本合同项下全部付款义务后，受托方应于${rebateDays}个工作日内完成上述费用返还。</p>
  <p class="en">If Party A receives an official offer of admission to ${progEn}, Party B shall rebate USD ${rebateAmt} of the consultation service fee to Party A. This rebate shall be made within ${rebateDays} business days after Party A provides the official admission offer and has fulfilled all payment obligations under this Agreement.</p>`;
    }

    let timelineBlock = '';
    if (this.diyServiceTimelineEnabled) {
      timelineBlock = `
  <h3>服务时效及申请信息补救机制</h3>
  <h4 class="en-h">Service Timeline and Application Information Remedy</h4>
  <p>在委托方已提供完成相关工作所需的完整信息及材料的前提下，受托方原则上应于收到完整材料后的 ${feedbackDays}个工作日内 完成文书修改、内容反馈或其他双方已约定申请材料的首轮反馈。如因材料内容复杂、申请方向发生较大调整、委托方临时新增申请项目，或其他可能影响正常交付进度的特殊情况，受托方应及时与委托方沟通，并由双方协商确认新的交付时间。如相关申请截止日期距离委托方提交完整材料不足${feedbackDays}个工作日，则具体交付时间应由双方另行协商确认。</p>
  <p class="en">Provided that Party A has submitted all complete information and materials necessary for the relevant work, Party B shall, in principle, provide the first round of essay edits, content feedback, or feedback on other agreed application materials within ${feedbackDays} business days after receiving such complete materials. If the materials require substantial revision, Party A makes significant changes to the intended field or application strategy, Party A adds new programs on short notice, or other circumstances arise that may reasonably affect the normal turnaround time, Party B shall communicate with Party A in a timely manner, and the parties shall mutually agree on a revised delivery timeline. If the applicable application deadline is less than ${feedbackDays} business days from the time Party A submits all complete materials, the delivery timeline shall be separately discussed and agreed upon by both parties.</p>
  <p>如因受托方向委托方提供的申请截止日期、申请材料要求或其他重要申请信息存在明显错误，或受托方在已获知院校官方重要更新后未及时向委托方进行合理提醒，且该等情形 直接导致 委托方在已按双方约定及时提供完整申请材料并完成必要配合的情况下，无法按时完成原定项目申请，则受托方应为委托方 免费增加一个与原项目申请难度、项目层级及专业方向相近的替代项目申请服务。替代项目由双方根据委托方的申请背景、专业方向、申请梯度及剩余申请时间协商确定，受托方不就该替代项目另行收取服务费用。上述补救措施为针对该等情形所提供的服务补救，不构成受托方对任何院校录取结果的承诺或保证。</p>
  <p class="en">If Party B provides Party A with materially incorrect information regarding an application deadline, required application materials, or other material application requirements, or if Party B fails to provide a reasonable and timely notice after becoming aware of a material official update, and such error or omission directly causes Party A to be unable to submit an originally planned application on time despite Party A having timely provided all complete application materials and fulfilled the necessary cooperation obligations, Party B shall provide, at no additional service fee, application services for one replacement program with a reasonably comparable level of competitiveness, program tier, and academic or professional focus. The replacement program shall be mutually determined by the parties based on Party A’s academic and professional background, intended field of study, application strategy, and the remaining application timeline. No additional service fee shall be charged for such replacement program. The foregoing remedy constitutes a service remedy for the circumstances described above and shall not be construed as a guarantee or promise of admission to any institution or program.</p>`;
    }

    return `
<div class="contract">
  <div class="contract-header" style="text-align:center;margin-bottom:16px;">
    <img src="${this.logoSrc()}" alt="MICHI ACADEMY" style="height:96px;"/>
    <div style="font-size:14pt;font-weight:bold;margin-top:8px;">MICHI ACADEMY INC</div>
  </div>

  <h2 style="text-align:center;font-size:16pt;">自费出国留学咨询服务委托协议书</h2>
  <h3 style="text-align:center;font-size:12pt;font-weight:normal;font-style:italic;">
    Agreement for Self-funded Study Abroad Consulting Services
  </h3>

  <table class="meta" border="1" cellpadding="6" cellspacing="0" width="100%">
    <tr><td width="48%">协议编号<br/>AGREEMENT NUMBER</td><td>${ag}</td></tr>
    <tr><td>委托方协议书签署人姓名<br/>Party A’s Name</td><td>${blank}</td></tr>
    <tr><td>委托方协议书签署人有效证件号码<br/>Party A’s ID</td><td>${blank}</td></tr>
    <tr><td>本协议书受益人姓名<br/>Beneficiary</td><td>${blank}</td></tr>
    <tr><td>本协议书受益人有效证件号码<br/>Beneficiary’s ID</td><td>${blank}</td></tr>
    <tr><td>本协议书受益人与委托方关系<br/>Relationship with Party A</td><td>${blank}</td></tr>
    <tr><td>委托方有效联系电话<br/>Party A’s Contact info</td><td>${blank}</td></tr>
    <tr><td>委托方有效住址<br/>Party A’s Address</td><td>${blank}</td></tr>
    <tr><td>委托方有效邮箱地址<br/>Party A’s Email</td><td>${blank}</td></tr>
    <tr><td>本协议书编号<br/>Contract Serial Number</td><td>${ag}</td></tr>
    <tr><td>受托方<br/>Party B</td><td>MICHI ACADEMY INC</td></tr>
    <tr><td>受托方有效联系电话<br/>Party B’s Mobile</td><td>781-957-6246</td></tr>
    <tr><td>受托方有效地址<br/>Party B’s Address</td><td>214 Duffield St, Brooklyn, NY 11201</td></tr>
    <tr><td>受托方有效邮箱地址<br/>Party B’s Email</td><td>INFO@MICHIACADEMY.COM</td></tr>
    <tr><td>受托方负责人<br/>Party B’s Agent</td><td>Yuxin Zhang</td></tr>
  </table>

  <p>委托方声明：委托方授权代理人对本协议书约定的文件，包括但不限于补充协议书、通知书、告知函、具结书、书面承诺等，有签署、认可、确认的权利，均可视为本人的行为，委托方承认其行为效力，并确认以上联系方式为留学服务联络的有效途径。</p>
  <p class="en">Party A’s statement: Party A authorizes the agent to sign, approve and confirm the documents stipulated in this agreement, including but not limited to the supplementary agreement, notice, notification letter, acknowledgment, written commitment, etc. Party A acknowledges the validity of its actions, and confirms that the above contact information is an effective way to reach.</p>

  <p>为了维护协议书当事人的合法权益，委托方与受托方双方本着自愿、平等、协商一致的原则，就受托方接受委托方的委托提供自费出国留学咨询服务事宜，达成如下协议：</p>
  <p class="en">With regard for the legitimate rights and interests of the parties to the agreement, Party A and Party B have reached the following agreement: Party A accepts Party B to provide consulting services for studying abroad at its own expense based on the principles of voluntarism, equality and consensus:</p>

  <h3>受托方服务项目及费用</h3>
  <h4 class="en-h">Service items and fees</h4>
  <p>委托方申请 美国（国家/地区）留学，申请学位为硕士 ，入学年为${year} 年。</p>
  <p class="en">Party A will apply study in the United States (country/region), master's degree, the admission year of ${year}.</p>
  <p>受托方向委托方提供留学前往国家/地区的协助入学申请咨询服务，包括：</p>
  <ul class="disc">
    <li>a. 2篇陈述文书修改（PS/SOP）-500至750英文词（2个专业方向）</li>
    <li>b. 5篇附加文书的（2个专业方向）的内容润色与修改建议，1篇Diversity statement文书的初稿撰写</li>
    <li>c. 1篇简历的初稿撰写，1篇简历的内容润色与修改建议</li>
    <li>d. 3-5封推荐信请求邮件的内容润色与修改建议</li>
    <li>e. 模拟面试培训（包括面试稿润色与修改）</li>
    <li>f. 申请信息答疑</li>
    <li>g. 申请院校项目咨询</li>
  </ul>
  <p class="en">Party B will provide Party A with consulting services in the admissions application process in the aforementioned country/region.</p>
  <ul class="disc en">
    <li>a. Drafting of Two Personal Statement/Statement of Purpose Essays – 500 to 750 words each, tailored to two intended fields of study</li>
    <li>b. Editing and Feedback on Five Supplemental Essays – for two intended fields of study; includes drafting support for one Diversity Statement essay</li>
    <li>c. Drafting of One Resume and Content Editing and Feedback on One Existing Resume</li>
    <li>d. Editing and content feedback for 3–5 recommendation letter request emails</li>
    <li>e. Mock Interview Preparation, including editing and feedback on interview scripts</li>
    <li>f. Q&A Support for Application-Related Inquiries</li>
    <li>g. Program and School Selection Consultation</li>
  </ul>
  <p>委托方向受托方缴付升学顾问咨询服务费美金 ${fee} 整，受托方为委托方申请院校办理。上述费用不包括第三方费用（第三方费用包括但不限于：院校加申服务费、专业加申服务费、以及护照费、院校报名/申请费、公证费、体检费、监护费、接机和住宿安排费、机票款等）。</p>
  <p class="en">Party A will pay Party B a consultation service fee of USD ${fee} for further education consulting, and Party B will provide college application service for Party A. The above fees do not include third-party fees (third-party fees include but are not limited to: application fee, passport renewal/application fee, medical examination fee, flight and accommodation arrangements, etc.)</p>

  <p>委托方因自身原因，单方面要求解除协议书或如发生以下任何情形之一，则委托方已缴纳的留学申请咨询服务费一律不予退还，受托方不再履行任何本协议书内的权利及义务，既双方终止本服务协议书：</p>
  <p class="en">If Party A unilaterally requests to withdraw the agreement due to its own reasons or when any of the following circumstances occurs, the consulting service fee for studying abroad that Party A has paid will not be refunded, and Party B will no longer be required to perform any rights and obligations stipulated in this agreement:</p>
  <ul class="star">
    <li>委托方无正当理由拒付本协议书约定的任何一笔款项；</li>
    <li class="en">Party A refuses to pay any sum agreed in this agreement without justifiable reasons;</li>
    <li>委托方无故终止协议</li>
    <li class="en">Party A terminates the agreement without reason</li>
    <li>委托方因提供虚假材料或隐瞒任何相关实情；</li>
    <li class="en">Party A provides fake materials or conceals any relevant facts</li>
    <li>委托方被前往国家或地区使(领)馆查实有非法移民、犯罪前科等不良记录；</li>
    <li class="en">Party A was found by the embassy (consulate or other government entity) of the country or region to have a bad record of illegal immigration, criminal activity, other types of misconduct, etc.</li>
    <li>委托方以任何原因在与受托方签约后自动放弃留学或继续接受受托方服务；</li>
    <li class="en">Party A gives up studying abroad or discontinues acceptance Party B’s services after signing the contract with Party B for any reason;</li>
    <li>委托方提供任何虚假信息或任何虚假材料;</li>
    <li class="en">The entrusting party provides any fake information or material;</li>
  </ul>

  ${rebateBlock}
  ${timelineBlock}

  <h3>付款方式</h3>
  <h4 class="en-h">Payment methods</h4>
  <p>付款方式 （委托方向受托方支付的服务费，或是委托受托方代交的学校申请费、学费等按照以下指定方式支付（除此之外的任何付费方式所带来的不利后果均由委托方承担））：</p>
  <p class="en">Payment methods (service fees paid by Party A to Party B, or school application fees, tuition fees, etc. paid by the entrusting party on behalf of the entrusted party shall be paid in accordance with the following specified methods (the adverse consequences of any other payment methods shall be borne by the entrusting party))</p>
  <ul class="star">
    <li>支付宝： 18510211741　伊昊正</li>
    <li class="en">Alipay: 18510211741　Haozheng Yi</li>
    <li>BANKE：中国工行扬州市江都支行　张俊</li>
    <li class="en">Account Number: 6212 8811 0800 0035 691</li>
  </ul>

  <h3>委托方义务</h3>
  <h4 class="en-h">Obligations of Party A</h4>
  <p>委托方向受托方送交的所有文件，材料和陈述的内容应合法，真实且有效</p>
  <p class="en">The contents of all documents, materials and statements Party A sends to Party B shall be authentic, legal and valid.</p>
  <p>委托方确认本协议书的委托事项，并按照本协议书约定按时向受托方支付相关费用。委托方应按受托方的时间规划要求，将入学所需全部材料交与受托方。</p>
  <p class="en">Party A confirms the entrusted matters in this agreement, and agrees to pays the relevant fees to Party B on time as stipulated in this agreement. Party A shall submit all the materials required for admission to Party B upon request.</p>
  <p>在留学申请办理过程中，如申请院校要求委托方进行的面试，委托方应按照要求参加，若委托方因各种原因未履约参加面试，所产生的任何损失由委托方全部自行承担；如前往国家/地区的留学政策或申请留学院校的入学要求、招生程序发生变化， 委托方应根据新的要求，在受托方的规定时间范围内提供补充材料。如委托方未在受托方规定的时间范围内提供补充材料，所产生的任何损失由委托方全部自行承担。</p>
  <p class="en">In the process of applying for studying abroad, if the applicant institution requires Party A to conduct an interview, Party A shall participate in the interview as required. If Party A fails to perform the interview due to various reasons, any losses incurred shall be borne by Party A. If the policy of studying abroad in the country/region or the admission requirements and admission procedures for applying for studying abroad change, Party A shall provide supplemental materials within the time frame . If Party A fails to provide supplemental materials specified by Party B timely, any losses incurred shall be fully borne by Party A.</p>
  <p>委托方明确中止留学申请办理手续，受托方具有相关申请文书材料及录取文件的保管权且委托方不享有一切留学申请相关材料的使用权，既委托方同意放弃申请入学学年的任何海外留学院校。</p>
  <p class="en">If Party A clearly suspends the application procedures for studying abroad., Party B has the right to keep the relevant documents and its original authorship. Party A shall not reproduce the work created by Party B as Part A agrees to forfeit the application.</p>
  <p>委托方自行负责有效联系途径（联系途径包括但不限于：电话、电子邮件、公共社交软件等）的用户名（登录名）与密码的安全，并不得将该用户名及密码提供给第三方使用。若委托方的联系方式发生变更的，则须及时书面通知受托方。若委托方未在十二个小时内通知受托方的，则上述联系方式视为有效的确认途径。</p>
  <p class="en">Party A is responsible for the security of the user name (login name) and password of effective contact channels (including but not limited to: telephone, email, social media, etc.), and shall not provide such user name and password to the third parties. If the contact information of Party A is changed, Party B must be notified in writing in a timely manner. If Party A fails to notify the entrusting party within 12 hours, any losses incurred shall be fully borne by Party A.</p>
  <p>委托方全权委托受托方提供留学信息并进行咨询服务，在本协议书生效期内委托方保证不委托除受托方之外的其他第三方机构或个人以有偿或无偿的方式为委托方提供留学信息并进行咨询服务，如委托方在未经受托方书面同意的情况下在本协议书生效期内委托方委托了除受托方之外的其他第三方机构或个人以有偿或无偿的方式为委托方提供留学信息并进行咨询服务，那么受托方有权利终止本协议书并不予委托方任何退款且委托方支付受托方全部留学规划服务费。</p>
  <p class="en">Party A has the sole authority to entrust Party B to provide study abroad information and provide consulting services. During the valid period of this agreement, Party A shall assures that it will not engage any third-party institutions or individuals other than Party B to be entrusted in a paid or free manner.If Party A, without the written consent of the entrusting party, entrusts other third-party institutions or individuals other than Party B within the valid period of this agreement to provide paid or unpaid consulting services, then Party B has the right to terminate this agreement without issuing any refund to Party A, and Party A shall pay all the study abroad planning service fees to Party B.</p>

  <h3>违约责任</h3>
  <h4 class="en-h">default</h4>
  <p>受托方和委托方应履行协议书中的全部条款，违约方应承担相应的违约责任。</p>
  <p class="en">Party B and Party A shall perform all the terms of the agreement, and the breaching party shall bear the corresponding liability for the breach of contract.</p>
  <p>受托方应当按照本协议书为委托方提供约定服务，如因受托方之过错给委托方造成损失的，则应当赔偿由此造成的委托方的直接损失，但赔偿的损失额度以受托方收取的服务费为限。</p>
  <p class="en">Party B shall provide Party A with the agreed services in accordance with this agreement. If losses are caused to Party A due to the fault of Party B, Party B shall compensate for the direct losses caused thereby, but the amount of compensation shall be limited to the service fee charged by Party B.</p>

  <h3>保密条款</h3>
  <h4 class="en-h">Privacy</h4>
  <p>委托方未经过受托方书面同意不得向第三方（包括新闻界人士）公开和披露任何与本协议书相关的材料（材料种类包括但不限于电子类材料，邮件，书面纸质材料等）。双方也促使各自代表不向第三方（包括新闻界人士）公开或披露任何与本协议书相关的材料（材料种类包括但不限于电子类材料，邮件，书面纸质材料等）。委托方与受托方双方有责任严格遵守保密条款，该条款在本协议书执行中及终止后始终有效。</p>
  <p class="en">Party A shall not disclose any materials related to this agreement (including but not limited to electronic materials, emails, and written paper materials) to third parties (including the press) without the written consent of Party B. Both parties also urge their representatives not to disclose any materials related to this agreement (including but not limited to electronic materials, emails, written paper materials, etc.) to third parties (including the press). Both parties are obliged to strictly abide by the confidentiality clause, which is always valid during the execution of this agreement and after its termination.</p>

  <h3>8.不可抗力</h3>
  <h4 class="en-h">8.force majeure</h4>
  <p>因不可抗力不能履行协议书的，根据不可抗力的影响，部分或全部免除责任。但法律另有规定的除外，当事人延迟履行后发生不可抗力的，不能免除责任。本协议书所称不可抗力，是指不能预见、不能避免并不能克服的客观情况，如重大自然灾害、瘟疫、战争、骚乱等。</p>
  <p class="en">If the agreement cannot be performed due to force majeure, the liability shall be partially or fully exempted according to the influence of force majeure. However, unless otherwise provided by law, if force majeure occurs after the parties delay performance, they cannot be exempted from liability stipulated in this agreement.The so-called force majeure refers to objective situations that cannot be foreseen, avoided and overcome, such as major natural disasters, plagues, wars, riots, etc.</p>
  <p>当事人一方因不可抗力不能履行协议书的，应当立即通知对方，说明不可抗力的发生日期、事件性质，预计持续的时间及对该方履行本协议书的影响，并应当自不可抗力发生之日起四十八小时内提供证明（此证明应当具备法律效力）。</p>
  <p class="en">If a party is unable to perform the agreement due to force majeure, it shall immediately notify the other party, stating the date of occurrence of the force majeure, the nature of the event, the expected duration and the impact on the party's performance of the agreement, and the date of the occurrence of the force majeure shall be provided by a certificate within 48 hours from the start (this certificate should have legal effect).</p>
  <p>对不可抗力所造成的影响，双方应及时协商解决办法和补救措施。因不可抗力不能履行协议书的一方，应尽力采取合理措施减轻可能给对方造成的损失，否则应对由此而扩大的损失承担赔偿责任。</p>
  <p class="en">For the impact caused by force majeure, both parties shall negotiate solutions and remedial measures in a timely manner. The party that is unable to perform the agreement due to force majeure shall try its best to take reasonable measures to reduce the losses that may be caused to the other party, otherwise it shall be liable for the increased losses.</p>

  <h3>适用的法律及争议解决方法及最终解释权</h3>
  <h4 class="en-h">Applicable laws and dispute resolution methods and final interpretation rights</h4>
  <p>本协议书的履行、解释及争议均适用于美国加利福尼亚州相关地方法.。</p>
  <p class="en">The performance, interpretation and disputes of this Agreement shall be applicable to the relevant local laws of California, the United States.</p>
  <p>双方在履行本协议书中如发生争议，应双方先行协商解决。如协商不成， 双方均有权向有管辖权的政府法务部门提出诉讼。</p>
  <p class="en">If there is a dispute between the two parties in the performance of this agreement, the two parties should first negotiate and resolve it. If the negotiation fails, both parties have the right to file a lawsuit with the competent government legal department</p>
  <p>受托方享有对本协议书的一切最终解释权。</p>
  <p class="en">Party B has the final right to interpret this agreement.</p>

  <h3>议书的附录、补充、变更、修改</h3>
  <h4 class="en-h">Appendices, Supplements, Changes and Amendments to the Agreement</h4>
  <p>如委托方未委托受托方进行指定学校的入学申请服务，本协议书第三条及相关收退费条款对当事人双方皆不具有约束力。</p>
  <p class="en">If Party A does not entrust Party B to carry out the admission application service of the designated school, Article 3 of this agreement and related terms of fee collection and refund are not binding on both parties.</p>
  <p>本协议书签订后，将代替之前与本协议书有关的所有书面或口头承诺，同时任何对本协议书或协议书附件的修订、补充、增加等均应采取书面并经各方签订，否则不能生效。经双方协商一致且书面确定协商结果，可以变更协议书并签署补充协议书。</p>
  <p class="en">After the signing of this agreement, it will replace all previous written or oral commitments related to this agreement. Any amendments, supplements, additions, etc. to this agreement or its annexes shall be in writing and approved by all parties. including signed endorsement, otherwise it will not take effect. After both parties reach an agreement and the negotiation result is confirmed in writing, the agreement can be changed and a supplemental agreement can be signed.</p>
  <p>本协议书的一切附录与本协议书本身具有同等法律效益。如双方在协议执行中以任何原因向对方提出解除或更改本协议书的任意附录，需要以书面的形式通知对方，并在双方书面同意后进行更改或解除。</p>
  <p class="en">All appendices to this agreement have the same legal effect as this agreement itself. If both parties propose to the other party to cancel or change any appendix of this agreement for any reason during the execution of the agreement, they need to notify the other party in writing, and make the change or release after the written consent of both parties.</p>

  <h3>其他条款</h3>
  <h4 class="en-h">Other terms</h4>
  <p>本协议书有效期为签订协议书日起 1 年。除非双方另有约定，协议书期满自动失效。</p>
  <p class="en">This agreement is valid for one year from the date of signing. Unless otherwise agreed by both parties, the agreement will automatically expire one year from the date of signing.</p>
  <p>本协议书由经委托方或委托方的代理人签字或按压手印及受托方盖章之日起生效。</p>
  <p class="en">This agreement will take effect from the date when it is signed by Party A and Party B.</p>
  <p>本协议书正本一式两份，具有同等效力，委托方（代理人）与受托方各执一份。</p>
  <p class="en">The original agreement and its duplicate have equal validity, and Party A and Party B each hold one copy.</p>
  <p>双方履行本协议书的权利和义务后，协议书终止。</p>
  <p class="en">After both parties perform their rights and obligations in this agreement, the agreement shall be terminated.</p>

  <h3>12.出入境及守法</h3>
  <h4 class="en-h">12.Immigration and law compliance</h4>
  <p>委托方（本协议受益人）有责任按照留学目标国家政府所颁发签证时间入境、离境；</p>
  <p class="en">The Party A (the beneficiary of this agreement) is responsible for entering and leaving the country according to the visa time period issued by the government of the destination country;</p>
  <p>由于委托方（本协议受益人）原因所造成的非法滞留均与受托方无关；委托方（本协议受益人）有责任遵守留学目标国家法律，委托方的任何违法行为均与受托方无关。</p>
  <p class="en">The illegal stay caused by Party A (the beneficiary of this agreement) has nothing to do with Party B; Party A (this agreement’s beneficiaries) are not related to Party B.</p>

  <br/>
  <p>委托方 Part A signature（签字）：________________</p>
  <p>委托方代理人 Party A Agent（签字）：________________</p>
  <p>签字日期 date： （mm/dd/yyyy): ________________</p>
  <p>受托方 Part B signature（签字）：________________</p>
  <p>签字日期 date： （mm/dd/yyyy): ________________</p>
</div>`;
  }

  /** 完整还原《全包合同模板.pdf》中英文内容；可调字段插值 */
  private buildMastersContractHtml(): string {
    const fee = this.formatMoney(this.totalFee);
    const dep = this.formatMoney(this.deposit);
    const second = this.formatMoney(this.secondPayment);
    const refund = this.formatMoney(this.refundAmount);
    const year = this.admissionYear;
    const days = this.paymentDeadlineDays;
    const blank = this.blank();
    const ag = this.escapeHtml((this.agreementNumber || '').trim()) || blank;

    const discountZhItems = this.getEnabledDiscounts().map(d => {
      const text = this.fillDiscountText(d.zhTemplate, d).trim();
      return text ? ('<li>' + this.escapeHtml(text) + '</li>') : '';
    }).join('');
    const discountEnItems = this.getEnabledDiscounts().map(d => {
      const text = this.fillDiscountText(d.enTemplate, d).trim();
      return text ? ('<li>' + this.escapeHtml(text) + '</li>') : '';
    }).join('');

    const discountZhBlock = discountZhItems
      ? ('有条件费用减免：<ul class="disc">' + discountZhItems + '</ul>' +
         '<p>*一切费用减免最终数字均服务于尾款调整</p>')
      : '<p>有条件费用减免：无</p>';
    const discountEnBlock = discountEnItems
      ? ('Conditional price adjustment：<ul class="disc">' + discountEnItems + '</ul>' +
         '<p>*Conditional price adjustment only applies to Part 2 final payment.</p>')
      : '<p>Conditional price adjustment：None</p>';

    return `
<div class="contract">
  <div class="contract-header" style="text-align:center;margin-bottom:16px;">
    <img src="${this.logoSrc()}" alt="MICHI ACADEMY" style="height:96px;"/>
    <div style="font-size:14pt;font-weight:bold;margin-top:8px;">MICHI ACADEMY INC</div>
  </div>

  <h2 style="text-align:center;font-size:16pt;">自费出国留学咨询服务委托协议书</h2>
  <h3 style="text-align:center;font-size:12pt;font-weight:normal;font-style:italic;">
    Agreement for Self-funded Study Abroad Consulting Services
  </h3>

  <table class="meta" border="1" cellpadding="6" cellspacing="0" width="100%">
    <tr><td width="48%">协议编号<br/>AGREEMENT NUMBER</td><td>${ag}</td></tr>
    <tr><td>委托方协议书签署人姓名<br/>Party A’s Name</td><td>${blank}</td></tr>
    <tr><td>委托方协议书签署人有效证件号码<br/>Party A’s ID</td><td>${blank}</td></tr>
    <tr><td>本协议书受益人姓名<br/>Beneficiary</td><td>${blank}</td></tr>
    <tr><td>本协议书受益人有效证件号码<br/>Beneficiary’s ID</td><td>${blank}</td></tr>
    <tr><td>本协议书受益人与委托方关系<br/>Relationship with Party A</td><td>${blank}</td></tr>
    <tr><td>委托方有效联系电话<br/>Party A’s Contact info</td><td>${blank}</td></tr>
    <tr><td>委托方有效住址<br/>Party A’s Address</td><td>${blank}</td></tr>
    <tr><td>委托方有效邮箱地址<br/>Party A’s Email</td><td>${blank}</td></tr>
    <tr><td>本协议书编号<br/>Contract Serial Number</td><td>${ag}</td></tr>
    <tr><td>受托方<br/>Party B</td><td>MICHI ACADEMY INC</td></tr>
    <tr><td>受托方有效联系电话<br/>Party B’s Mobile</td><td>781-957-6246</td></tr>
    <tr><td>受托方有效地址<br/>Party B’s Address</td><td>214 Duffield St, Brooklyn, NY 11201</td></tr>
    <tr><td>受托方有效邮箱地址<br/>Party B’s Email</td><td>INFO@MICHIACADEMY.COM</td></tr>
    <tr><td>受托方负责人<br/>Party B’s Agent</td><td>YUXIN ZHANG</td></tr>
  </table>

  <p>委托方声明：委托方授权代理人对本协议书约定的文件，包括但不限于补充协议书、通知书、告知函、具结书、书面承诺等，有签署、认可、确认的权利，均可视为本人的行为，委托方承认其行为效力，并确认以上联系方式为留学服务联络的有效途径。</p>
  <p class="en">Party A’s statement: Party A authorizes the agent to sign, approve and confirm the documents stipulated in this agreement, including but not limited to the supplementary agreement, notice, notification letter, acknowledgment, written commitment, etc. Party A acknowledges the validity of its actions, and confirms that the above contact information is an effective way to reach.</p>

  <p>为了维护协议书当事人的合法权益，委托方与受托方双方本着自愿、平等、协商一致的原则，就受托方接受委托方的委托提供自费出国留学咨询服务事宜，达成如下协议：</p>
  <p class="en">With regard for the legitimate rights and interests of the parties to the agreement, Party A and Party B have reached the following agreement: Party A accepts Party B to provide consulting services for studying abroad at its own expense based on the principles of voluntarism, equality and consensus:</p>

  <h3>1. 服务项目及费用</h3>
  <h4 class="en-h">1. Service items and fees</h4>
  <p>委托方申请 美国 和其他国家 留学，申请学位为硕士 ，入学年为${year}年，最终以申请人完成本科学历毕业时间结果为准。申请项目数量：无限制</p>
  <p class="en">Party A will apply study in the United States and other countries, master's degree, the admission year of ${year}. The final result will be based on the applicant's completion of the undergraduate degree graduation time.<br/>Number (Schools and Programs) of applications: Unlimited</p>
  <p>受托方向委托方提供留学前往国家/地区的协助入学申请咨询服务</p>
  <p class="en">Party B will provide Party A with consulting services in the admissions application process in the aforementioned country/region.</p>
  <p>委托方向受托方缴付升学顾问咨询服务费美元 ${fee} 整，受托方为委托方申请院校办理。上述费用不包括第三方费用（第三方费用包括但不限于：护照费、院校报名/申请费、公证费、体检费、监护费、接机和住宿安排费、机票款等）。升学顾问咨询服务费美元 ${fee} 整：</p>
  <p>第一期款项（定金）美元 ${dep} 整，</p>
  <p>及第二期款项美元 ${second} 整，付款期限：收到第一个院校录取通知后的${days}个工作日内</p>
  ${discountZhBlock}
  <p class="en">Party A will pays Party B a consultation service fee of USD ${fee} for further education consulting, and Party B will provide college application service for Party A. The above fees do not include third-party fees (third-party fees include but are not limited to: application fee, passport renewal/application fee, medical examination fee, flight and accommodation arrangements, etc.).</p>
  <p class="en">consultation service fee of USD ${fee}：<br/>Part1.deposit：USD ${dep};<br/>Part2.final payments: ${second}; Payment deadline: Within ${days} working days after receiving the first application and admission notice from the institution</p>
  ${discountEnBlock}
  <p>受托方根据委托方的条件和要求推荐留学院校，双方协商确定签订《附录：选校确认书》、《增加申请院校》、《变更申请院校》等补充协议书级双方书面确认信息作为最终申请院系依据。</p>
  <p class="en">Party B will recommend overseas colleges and universities accordingly based on requirements of Party A, and the two parties shall negotiate and decide whether to sign the Appendices: "Confirmation of College Selection", "Adding Colleges to Apply", "Change of Colleges to Apply for", etc. The written confirmation and information of recorded by both parties within the supplemental agreement(s) shall be used as the basis for the final application of to the department.</p>

  <h3>2. 退款</h3>
  <h4 class="en-h">2. Refund</h4>
  <p>由于各个院校每年的申请人数，录取政策等的变动，受托方不能保证委托方一定会被首院校录取。若受托方最终没有在协议书有效期范围内收到任何一所协议书约定的升学院校的录取通知书（含有条件的录取通知书），则受托方退还委托方美金${refund}整。</p>
  <p class="en">Due to changes in the number of applicants and admission policies of each institution each year, Party B cannot guarantee that Party A will be admitted to most preferred institution. If the entrusted party does not receive the admission notice (admission letter with conditions) from any school for further studies stipulated in the agreement within the validity period of the agreement, Party B shall refund the total amount of $${refund}.</p>
  <p>委托方因自身原因，单方面要求解除协议书或如发生以下任何情形之一，则委托方已缴纳的留学申请咨询服务费一律不予退还，受托方不再履行任何本协议书内的权利及义务，既双方终止本服务协议书：</p>
  <p class="en">If Party A unilaterally requests to withdraw the agreement due to its own reasons or when any of the following circumstances occurs, the consulting service fee for studying abroad that Party A has paid will not be refunded, and Party B will no longer be required to perform any rights and obligations stipulated in this agreement:</p>
  <ul class="star">
    <li>委托方无正当理由拒付本协议书约定的任何一笔款项；</li>
    <li class="en">Party A refuses to pay any sum agreed in this agreement without justifiable reasons;</li>
    <li>委托方无故终止协议</li>
    <li class="en">Party A terminates the agreement without reason</li>
    <li>委托方因提供虚假材料或隐瞒任何相关实情；</li>
    <li class="en">Party A provides fake materials or conceals any relevant facts</li>
    <li>委托方被前往国家或地区使(领)馆查实有非法移民、犯罪前科等不良记录；</li>
    <li class="en">Party A was found by the embassy (consulate or other government entity) of the country or region to have a bad record of illegal immigration, criminal activity, other types of misconduct, etc.</li>
    <li>在留学申请办理过程中，如申请院校要求委托方进行面试，委托方未能及时按时面试而导致拒录；</li>
    <li class="en">In the process of applying for studying abroad, if the applicant institution requires Party A to conduct an interview, and Party A fails to interview on time, resulting in refusal of admission;</li>
    <li>在留学申请办理过程中，如申请院校要求委托方补交材料，委托方未按时交齐而导致拒录；</li>
    <li class="en">In the process of applying for studying abroad, if the applicant institution requires Party A to submit supplemental materials, and the entrusting party fails to submit all the materials on time, resulting in refusal of admission;</li>
    <li>委托方以任何原因在与受托方签约后自动放弃留学或继续接受受托方服务；</li>
    <li class="en">Party A gives up studying abroad or discontinues acceptance Party B’s services after signing the contract with Party B for any reason;</li>
    <li>委托方提供任何虚假信息或任何虚假材料；</li>
    <li class="en">The entrusting party provides any fake information or material;</li>
    <li>委托方不配合受托方任何一项与申请相关的工作并因其影响最终录取结果。</li>
    <li class="en">Party A will not cooperate with the entrusting party in any work related to the application that will affect the final admission result.</li>
  </ul>

  <h3>3. 付款方式</h3>
  <h4 class="en-h">3. Payment methods</h4>
  <p>付款方式（委托方向受托方支付的服务费，或是委托受托方代交的学校申请费、学费等按照以下指定方式支付（除此之外的任何付费方式所带来的不利后果均由委托方承担））：</p>
  <p class="en">Payment methods (service fees paid by Party A to Party B, or school application fees, tuition fees, etc. paid by the entrusting party on behalf of the entrusted party shall be paid in accordance with the following specified methods (the adverse consequences of any other payment methods shall be borne by the entrusting party))</p>
  <ul class="star">
    <li>支付宝： 18510211741　伊昊正</li>
    <li class="en">Alipay: 18510211741　Haozheng Yi</li>
    <li>BANKE：中国工行扬州市江都支行　张俊</li>
    <li class="en">Account Number: 6212 8811 0800 0035 691</li>
  </ul>

  <h3>4. 受托方义务</h3>
  <h4 class="en-h">4. Obligations of Party B</h4>
  <p><strong>*背景评估与选校建议</strong><br/>
  受托方应为委托方提供背景评估服务，并依据评估结果及申请难度，提供目标院校相关信息（包括院系、专业、入学要求、申请流程等）供委托方参考与筛选，最终选校结果由委托方确认。</p>
  <p class="en"><strong>* Background Evaluation and School Selection Advice</strong><br/>
  Party B shall provide background evaluation services for Party A and, based on the evaluation results and application difficulty, offer relevant information on target institutions (including departments, majors, admission requirements, and application procedures) for Party A’s reference and selection. The final school selection decision shall be made by Party A.</p>

  <p><strong>*申请文书与材料提交服务</strong><br/>
  受托方为委托方提供全流程文书服务（例如：个人陈述，简历），并负责受托方应指导委托方完成申请表格填写、申请材料准备与递交等相关事务。</p>
  <p class="en"><strong>* Application Document and Submission Services</strong><br/>
  Party B shall provide comprehensive support throughout the entire application writing process for Party A (e.g., personal statement, resume) and guide Party A in completing application forms, preparing documents, and submitting required materials.</p>

  <p><strong>*校方沟通授权代理</strong><br/>
  受托方可在申请过程中代为与校方及相关教授进行通信（例如：教授推荐信联络邮件）</p>
  <p class="en"><strong>* Authorized Communication with Institutions</strong><br/>
  Party B is authorized to communicate on behalf of Party A with institutions and professors during the application process (e.g., email correspondence for recommendation letters).</p>

  <p><strong>*面试辅导服务</strong><br/>
  如申请学校要求面试，受托方应向委托方提供相应辅导服务。</p>
  <p class="en"><strong>* Interview Coaching Services</strong><br/>
  If an interview is required by the target institution, Party B shall provide corresponding interview coaching services to Party A.</p>

  <p><strong>*延期入学服务</strong><br/>
  如委托方因故无法按期入学，且已支付全部服务费用，受托方应协助其编辑延期入学申诉。</p>
  <p class="en"><strong>* Deferral Support Services</strong><br/>
  If Party A is unable to enroll on time due to unforeseen circumstances and has paid all service fees in full, Party B shall assist in drafting and submitting a deferral request.</p>

  <p><strong>*最终学校选择建议</strong><br/>
  在委托方获得多所学校录取或奖学金通知时，受托方应提供选择建议，但最终决定权归委托方所有。</p>
  <p class="en"><strong>* Final Admission Decision Advice</strong><br/>
  If Party A receives multiple admission offers or scholarships, Party B shall provide advice on the final decision. However, the final choice shall remain with Party A.</p>

  <p><strong>*学术课程规划与选课咨询服务</strong><br/>
  针对尚未完成本科学业的委托方，受托方应根据申请方向及目标项目的录取要求，协助其进行选课规划，提供课程组合建议，帮助其合理安排学术路径，提升申请竞争力。</p>
  <p class="en"><strong>* Academic Course Planning and Enrollment Consultation</strong><br/>
  For Party A who has not yet completed undergraduate studies, Party B shall assist in planning course selections based on the application direction and admission requirements of the target program. Party B shall provide recommendations on course combinations to help Party A reasonably arrange their academic path and enhance competitiveness.</p>

  <p><strong>*科研与实习背景提升辅导</strong><br/>
  受托方应结合委托方兴趣与申请方向，提供科研项目、实验室岗位、实习机会或夏校咨询，并协助准备申请材料，如简历、动机信等。</p>
  <p class="en"><strong>* Research and Internship Guidance Services</strong><br/>
  Party B shall, based on Party A’s interests and application goals, offer consultation on research projects, lab positions, internship opportunities, or summer programs. Party B shall also assist in the preparation of application materials, such as resumes and motivation letters.</p>

  <p><strong>*语言与标准化考试规划服务</strong><br/>
  受托方应协助委托方制定标准化考试（如TOEFL、IELTS、GRE、GMAT等）学习与考试时间规划，提供备考建议和学习资源指引。</p>
  <p class="en"><strong>* Language and Standardized Test Planning Services</strong><br/>
  Party B shall assist Party A in planning preparation and test-taking schedules for standardized tests (e.g., TOEFL, IELTS, GRE, GMAT), and provide guidance on preparation strategies and learning resources.</p>

  <p>* 委托方同时申请多所院校的，获得其中任何一所院校的录取通知书（包括有条件录取通知书），即视为受托方已履行为委托方办理申请入学的义务。</p>
  <p class="en">If Party A applies for more than one institution at the same time, and obtains the admission offer (including the conditional admission letter) from any one of the institutions, it is deemed that Party B has fulfilled the obligation.</p>

  <h3>5. 委托方义务</h3>
  <h4 class="en-h">5. Obligations of Party A</h4>
  <p>委托方向受托方送交的所有文件，材料和陈述的内容应合法，真实且有效</p>
  <p class="en">The contents of all documents, materials and statements Party A sends to Party B shall be authentic, legal and valid.</p>
  <p>委托方确认本协议书的委托事项，并按照本协议书约定按时向受托方支付相关费用。委托方应按受托方的时间规划要求，将入学所需全部材料交与受托方。</p>
  <p class="en">Party A confirms the entrusted matters in this agreement, and agrees to pays the relevant fees to Party B on time as stipulated in this agreement. Party A shall submit all the materials required for admission to Party B upon request.</p>
  <p>若委托方的院校申请需要提供专业型论述文书（包括但不限于研究论文、课程描述、艺术品描述等），则委托方需自行撰写；若受托方可为委托方进行相关翻译的，则委托方需要按照实际文书情况缴纳额外翻译费用。</p>
  <p class="en">If Party A’s application for a college or university requires original copy of documents (including but not limited to research papers, course descriptions, artwork descriptions, dissertations, etc.), Party A must write by itself; If necessary, Party A needs to pay additional translation fees in accordance with the actual documents.</p>
  <p>在留学申请办理过程中，如申请院校要求委托方进行的面试，委托方应按照要求参加，若委托方因各种原因未履约参加面试，所产生的任何损失由委托方全部自行承担；如前往国家/地区的留学政策或申请留学院校的入学要求、招生程序发生变化，委托方应根据新的要求，在受托方的规定时间范围内提供补充材料。如委托方未在受托方规定的时间范围内提供补充材料，所产生的任何损失由委托方全部自行承担。</p>
  <p class="en">In the process of applying for studying abroad, if the applicant institution requires Party A to conduct an interview, Party A shall participate in the interview as required. If Party A fails to perform the interview due to various reasons, any losses incurred shall be borne by Party A. If the policy of studying abroad in the country/region or the admission requirements and admission procedures for applying for studying abroad change, Party A shall provide supplemental materials within the time frame. If Party A fails to provide supplemental materials specified by Party B timely, any losses incurred shall be fully borne by Party A.</p>
  <p>委托方明确中止留学申请办理手续，受托方具有相关申请文书材料及录取文件的保管权且委托方不享有一切留学申请相关材料的使用权，既委托方同意放弃申请入学学年的任何海外留学院校。</p>
  <p class="en">If Party A clearly suspends the application procedures for studying abroad., Party B has the right to keep the relevant documents and its original authorship. Party A shall not reproduce the work created by Party B as Part A agrees to forfeit the application.</p>
  <p>委托方自行负责有效联系途径（联系途径包括但不限于：电话、电子邮件、公共社交软件等）的用户名（登录名）与密码的安全，并不得将该用户名及密码提供给第三方使用。若委托方的联系方式发生变更的，则须及时书面通知受托方。若委托方未在十二个小时内通知受托方的，则上述联系方式视为有效的确认途径。</p>
  <p class="en">Party A is responsible for the security of the user name (login name) and password of effective contact channels (including but not limited to: telephone, email, social media, etc.), and shall not provide such user name and password to the third parties. If the contact information of Party A is changed, Party B must be notified in writing in a timely manner. If Party A fails to notify the entrusting party within 12 hours, any losses incurred shall be fully borne by Party A.</p>
  <p>委托方全权委托受托方提供留学信息并进行咨询服务，在本协议书生效期内委托方保证不委托除受托方之外的其他第三方机构或个人以有偿或无偿的方式为委托方提供留学信息并进行咨询服务，如委托方在未经受托方书面同意的情况下在本协议书生效期内委托方委托了除受托方之外的其他第三方机构或个人以有偿或无偿的方式为委托方提供留学信息并进行咨询服务，那么受托方有权利终止本协议书并不予委托方任何退款且委托方支付受托方全部留学规划服务费。</p>
  <p class="en">Party A has the sole authority to entrust Party B to provide study abroad information and provide consulting services. During the valid period of this agreement, Party A shall assures that it will not engage any third-party institutions or individuals other than Party B to be entrusted in a paid or free manner.If Party A, without the written consent of the entrusting party, entrusts other third-party institutions or individuals other than Party B within the valid period of this agreement to provide paid or unpaid consulting services, then Party B has the right to terminate this agreement without issuing any refund to Party A, and Party A shall pay all the study abroad planning service fees to Party B.</p>

  <h3>6. 违约责任</h3>
  <h4 class="en-h">6.default</h4>
  <p>受托方和委托方应履行协议书中的全部条款，违约方应承担相应的违约责任。</p>
  <p class="en">Party B and Party A shall perform all the terms of the agreement, and the breaching party shall bear the corresponding liability for the breach of contract.</p>
  <p>受托方应当按照本协议书为委托方提供约定服务，如因受托方之过错给委托方造成损失的，则应当赔偿由此造成的委托方的直接损失，但赔偿的损失额度以受托方收取的服务费为限。</p>
  <p class="en">Party B shall provide Party A with the agreed services in accordance with this agreement. If losses are caused to Party A due to the fault of Party B, Party B shall compensate for the direct losses caused thereby, but the amount of compensation shall be limited to the service fee charged by Party B.</p>

  <h3>7. 保密条款</h3>
  <h4 class="en-h">7.Privacy</h4>
  <p>委托方未经过受托方书面同意不得向第三方（包括新闻界人士）公开和披露任何与本协议书相关的材料（材料种类包括但不限于电子类材料，邮件，书面纸质材料等）。双方也促使各自代表不向第三方（包括新闻界人士）公开或披露任何与本协议书相关的材料（材料种类包括但不限于电子类材料，邮件，书面纸质材料等）。委托方与受托方双方有责任严格遵守保密条款，该条款在本协议书执行中及终止后始终有效。</p>
  <p class="en">Party A shall not disclose any materials related to this agreement (including but not limited to electronic materials, emails, and written paper materials) to third parties (including the press) without the written consent of Party B. Both parties also urge their representatives not to disclose any materials related to this agreement (including but not limited to electronic materials, emails, written paper materials, etc.) to third parties (including the press). Both parties are obliged to strictly abide by the confidentiality clause, which is always valid during the execution of this agreement and after its termination.</p>

  <h3>8. 不可抗力</h3>
  <h4 class="en-h">8.force majeure</h4>
  <p>因不可抗力不能履行协议书的，根据不可抗力的影响，部分或全部免除责任。但法律另有规定的除外，当事人延迟履行后发生不可抗力的，不能免除责任。本协议书所称不可抗力，是指不能预见、不能避免并不能克服的客观情况，如重大自然灾害、瘟疫、战争、骚乱等。</p>
  <p class="en">If the agreement cannot be performed due to force majeure, the liability shall be partially or fully exempted according to the influence of force majeure. However, unless otherwise provided by law, if force majeure occurs after the parties delay performance, they cannot be exempted from liability stipulated in this agreement.The so-called force majeure refers to objective situations that cannot be foreseen, avoided and overcome, such as major natural disasters, plagues, wars, riots, etc.</p>
  <p>当事人一方因不可抗力不能履行协议书的，应当立即通知对方，说明不可抗力的发生日期、事件性质，预计持续的时间及对该方履行本协议书的影响，并应当自不可抗力发生之日起四十八小时内提供证明（此证明应当具备法律效力）。</p>
  <p class="en">If a party is unable to perform the agreement due to force majeure, it shall immediately notify the other party, stating the date of occurrence of the force majeure, the nature of the event, the expected duration and the impact on the party's performance of the agreement, and the date of the occurrence of the force majeure shall be provided by a certificate within 48 hours from the start (this certificate should have legal effect).</p>
  <p>对不可抗力所造成的影响，双方应及时协商解决办法和补救措施。因不可抗力不能履行协议书的一方，应尽力采取合理措施减轻可能给对方造成的损失，否则应对由此而扩大的损失承担赔偿责任。</p>
  <p class="en">For the impact caused by force majeure, both parties shall negotiate solutions and remedial measures in a timely manner. The party that is unable to perform the agreement due to force majeure shall try its best to take reasonable measures to reduce the losses that may be caused to the other party, otherwise it shall be liable for the increased losses.</p>

  <h3>9. 适用的法律及争议解决方法及最终解释权</h3>
  <h4 class="en-h">9.Applicable laws and dispute resolution methods and final interpretation rights</h4>
  <p>本协议书的履行、解释及争议均适用于美国加利福尼亚州相关地方法.。</p>
  <p class="en">The performance, interpretation and disputes of this Agreement shall be applicable to the relevant local laws of California, the United States.</p>
  <p>双方在履行本协议书中如发生争议，应双方先行协商解决。如协商不成，双方均有权向有管辖权的政府法务部门提出诉讼，或提交仲裁机构处理。若发生诉讼，双方同意将争议提交中国山东省淄博市张店区人民法院处理；若发生仲裁，则提交淄博市仲裁委员会进行仲裁。</p>
  <p class="en">If there is a dispute between the two parties in the performance of this agreement, the two parties should first negotiate and resolve it. If the negotiation fails, both parties have the right to file a lawsuit with the competent government legal department, or submit the dispute to an arbitration institution. For litigation, both parties agree to submit the dispute to the Zhangdian District People's Court of Zibo City, Shandong Province, China. For arbitration, the dispute shall be submitted to the Zibo Arbitration Commission.</p>
  <p>受托方享有对本协议书的一切最终解释权。</p>
  <p class="en">Party B has the final right to interpret this agreement.</p>

  <h3>10. 议书的附录、补充、变更、修改</h3>
  <h4 class="en-h">10. Appendices, Supplements, Changes and Amendments to the Agreement</h4>
  <p>如委托方未委托受托方进行指定学校的入学申请服务，本协议书第三条及相关收退费条款对当事人双方皆不具有约束力。</p>
  <p class="en">If Party A does not entrust Party B to carry out the admission application service of the designated school, Article 3 of this agreement and related terms of fee collection and refund are not binding on both parties.</p>
  <p>本协议书签订后，将代替之前与本协议书有关的所有书面或口头承诺，同时任何对本协议书或协议书附件的修订、补充、增加等均应采取书面并经各方签订，否则不能生效。经双方协商一致且书面确定协商结果，可以变更协议书并签署补充协议书。</p>
  <p class="en">After the signing of this agreement, it will replace all previous written or oral commitments related to this agreement. Any amendments, supplements, additions, etc. to this agreement or its annexes shall be in writing and approved by all parties. including signed endorsement, otherwise it will not take effect. After both parties reach an agreement and the negotiation result is confirmed in writing, the agreement can be changed and a supplemental agreement can be signed.</p>
  <p>本协议书的一切附录与本协议书本身具有同等法律效益。如双方在协议执行中以任何原因向对方提出解除或更改本协议书的任意附录，需要以书面的形式通知对方，并在双方书面同意后进行更改或解除。</p>
  <p class="en">All appendices to this agreement have the same legal effect as this agreement itself. If both parties propose to the other party to cancel or change any appendix of this agreement for any reason during the execution of the agreement, they need to notify the other party in writing, and make the change or release after the written consent of both parties.</p>

  <h3>11. 其他条款</h3>
  <h4 class="en-h">11.Other terms</h4>
  <p>本协议书有效期为签订协议书日起 2年。除非双方另有约定，协议书期满自动失效。</p>
  <p class="en">This agreement is valid for two years from the date of signing. Unless otherwise agreed by both parties, the agreement will automatically expire one year from the date of signing.</p>
  <p>若解除该协议，经双方协商书面同意后解除。</p>
  <p class="en">If the agreement need terminated, it shall be terminated after negotiation and written consent of both parties.</p>
  <p>本协议书由经委托方或委托方的代理人签字之日起生效。</p>
  <p class="en">This agreement will take effect from the date when it is signed by Party A and Party B.</p>
  <p>本协议书正本一式两份，具有同等效力，委托方（代理人）与受托方各执一份。</p>
  <p class="en">The original agreement and its duplicate have equal validity, and Party A and Party B each hold one copy.</p>
  <p>双方履行本协议书的权利和义务后，协议书终止。</p>
  <p class="en">After both parties perform their rights and obligations in this agreement, the agreement shall be terminated.</p>
  <p>《附录：选校确认书》作为补充协议书应由委托方与受托方双方协商后确定签署，签署后与本协议书共同生效。</p>
  <p class="en">"Appendix: Confirmation of School Selection" as a supplementalry agreement should be signed by both Party A and Party B after negotiation, and will take effect together with this agreement after signing.</p>

  <h3>12. 出入境及守法</h3>
  <h4 class="en-h">12.Immigration and law compliance</h4>
  <p>委托方（本协议受益人）有责任按照留学目标国家政府所颁发签证时间入境、离境；</p>
  <p class="en">The Party A (the beneficiary of this agreement) is responsible for entering and leaving the country according to the visa time period issued by the government of the destination country;</p>
  <p>由于委托方（本协议受益人）原因所造成的非法滞留均与受托方无关；委托方（本协议受益人）有责任遵守留学目标国家法律，委托方的任何违法行为均与受托方无关。</p>
  <p class="en">The illegal stay caused by Party A (the beneficiary of this agreement) has nothing to do with Party B; Party A (this agreement’s beneficiaries) are not related to Party B.</p>

  <br/>
  <p>委托方Part A signature（签字）：________________</p>
  <p>委托方代理人 Party A Agent（签字）：________________</p>
  <p>签字日期date： （mm/dd/yyyy): ________________</p>
  <p>受托方 Part B signature（签字）：________________</p>
  <p>签字日期date： （mm/dd/yyyy): ________________</p>
</div>`;
  }

  private wrapDocument(body: string, title: string): string {
    return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>${title}</title>
<style>
  @page { margin: 18mm; }
  body { font-family: "Songti SC", "SimSun", "Times New Roman", serif; font-size: 11pt; line-height: 1.55; color: #111; margin: 18mm; }
  h2, h3 { margin: 14px 0 6px; }
  h4.en-h { margin: 0 0 8px; font-weight: normal; font-style: italic; font-size: 11pt; }
  p.en, li.en { font-style: italic; color: #222; }
  table.meta { border-collapse: collapse; margin: 12px 0 20px; }
  table.meta td { border: 1px solid #333; vertical-align: top; min-height: 28px; }
  table.meta td:first-child { width: 48%; background: #f7f7f7; }
  ul.star, ul.disc { padding-left: 22px; margin: 6px 0; }
  p { margin: 8px 0; }
  .contract-header img { height: 96px; }
  @media print {
    body { margin: 18mm; }
  }
</style>
</head>
<body>${body}</body>
</html>`;
  }

  getPreviewHtml(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.buildContractBodyHtml());
  }

  exportWord() {
    const html = this.wrapDocument(this.buildContractBodyHtml(), this.contractTitle);
    const blob = new Blob(['\ufeff', html], { type: 'application/msword;charset=utf-8' });
    FileSaver.saveAs(blob, this.contractTitle + '_' + (this.agreementNumber || 'draft') + '.doc');
  }

  private loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector('script[src="' + src + '"]');
      if (existing) {
        resolve();
        return;
      }
      const s = document.createElement('script');
      s.src = src;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error('Failed to load ' + src));
      document.body.appendChild(s);
    });
  }

  exportPdf() {
    const fileName = this.contractTitle + '_' + (this.agreementNumber || 'draft') + '.pdf';
    const fullHtml = this.wrapDocument(this.buildContractBodyHtml(), this.contractTitle);
    const bodyHtml = this.buildContractBodyHtml();
    const self = this;

    this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js')
      .then(function () {
        return self.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js');
      })
      .then(function () {
        return self.ensureLogoDataUrl();
      })
      .then(function (logoSrc) {
        const host = document.createElement('div');
        host.style.position = 'fixed';
        host.style.left = '-10000px';
        host.style.top = '0';
        host.style.width = '700px';
        host.style.background = '#fff';
        host.style.padding = '8px 12px';
        host.style.fontFamily = '"Songti SC","SimSun","Times New Roman",serif';
        host.style.fontSize = '11pt';
        host.style.lineHeight = '1.55';
        host.style.color = '#111';
        host.innerHTML = bodyHtml;
        // 正文不再带 logo，改由每一页 PDF 页眉单独绘制
        const hdr = host.querySelector('.contract-header') as HTMLElement;
        if (hdr) {
          hdr.style.display = 'none';
        }
        document.body.appendChild(host);

        const html2canvasFn = (window as any).html2canvas;
        const JsPDF = (window as any).jsPDF;

        return html2canvasFn(host, { scale: 2, useCORS: true, logging: false, allowTaint: false }).then(function (canvas) {
          const pdf = new JsPDF('p', 'mm', 'a4');
          const pageW = 210;
          const pageH = 297;
          // 加宽页边距
          const marginX = 18;
          const marginBottom = 18;
          const marginTop = 14;
          const logoH = 16;
          const logoW = 12.5;
          const titleH = 6;
          const headerGap = 5;
          const contentTop = marginTop + logoH + titleH + headerGap;
          const usableW = pageW - marginX * 2;
          // 略微收紧可用高度，给页底留安全空隙，减少贴边裁切
          const usableH = pageH - contentTop - marginBottom - 3;

          const imgW = usableW;
          const pxPerMm = canvas.width / imgW;
          const maxSlicePx = usableH * pxPerMm;

          // 在接近分页处向上寻找空白行，避免把一行字拦腰切断
          const findSafeSplitY = function (sourceCanvas, startY, maxEndY) {
            const canvasH = sourceCanvas.height;
            const idealEnd = Math.min(maxEndY, canvasH);
            if (idealEnd >= canvasH) {
              return canvasH;
            }
            const ctx2 = sourceCanvas.getContext('2d');
            const w = sourceCanvas.width;
            // 在页底向上约 2～3 行（按 scale=2 约 90～140px）内找空白缝
            const lookback = Math.min(140, Math.floor((idealEnd - startY) * 0.35));
            const searchFrom = Math.max(startY + 40, idealEnd - lookback);

            const isMostlyWhite = function (y) {
              const row = Math.floor(y);
              if (row < 0 || row >= canvasH) {
                return false;
              }
              const data = ctx2.getImageData(0, row, w, 1).data;
              let dark = 0;
              const step = 8;
              for (let x = 0; x < w; x += step) {
                const i = x * 4;
                // 非近白像素视为有墨迹
                if (data[i] < 248 || data[i + 1] < 248 || data[i + 2] < 248) {
                  dark++;
                  if (dark > 2) {
                    return false;
                  }
                }
              }
              return true;
            };

            // 从理想分页线向上找一段连续空白，并切在空白带中部
            for (let y = idealEnd - 1; y >= searchFrom; y--) {
              if (!isMostlyWhite(y)) {
                continue;
              }
              let top = y;
              while (top > searchFrom && isMostlyWhite(top - 1)) {
                top--;
              }
              let bottom = y;
              while (bottom < idealEnd - 1 && isMostlyWhite(bottom + 1)) {
                bottom++;
              }
              // 空白带至少约 4px 才认为安全
              if (bottom - top >= 3) {
                return Math.floor((top + bottom) / 2);
              }
            }
            // 找不到空白时，再略微上移一点，减少贴着字形裁切的概率
            return Math.max(startY + 40, idealEnd - 18);
          };

          let sliceY = 0;
          let page = 0;
          while (sliceY < canvas.height - 1) {
            if (page > 0) {
              pdf.addPage();
            }

            // 每页页眉：logo + 公司名
            if (logoSrc) {
              try {
                const logoX = (pageW - logoW) / 2;
                pdf.addImage(logoSrc, 'JPEG', logoX, marginTop, logoW, logoH);
              } catch (e) {
                // ignore logo draw failure
              }
            }
            pdf.setFontSize(11);
            pdf.setTextColor(20);
            const company = 'MICHI ACADEMY INC';
            const textW = pdf.getStringUnitWidth(company) * 11 / pdf.internal.scaleFactor;
            pdf.text(company, (pageW - textW) / 2, marginTop + logoH + 4.5);

            const idealEnd = sliceY + maxSlicePx;
            let splitY = idealEnd;
            try {
              splitY = findSafeSplitY(canvas, sliceY, idealEnd);
            } catch (e) {
              splitY = Math.min(canvas.height, Math.max(sliceY + 40, idealEnd - 18));
            }
            if (splitY <= sliceY) {
              splitY = Math.min(canvas.height, sliceY + maxSlicePx);
            }
            const thisSliceH = Math.max(1, splitY - sliceY);

            const pageCanvas = document.createElement('canvas');
            pageCanvas.width = canvas.width;
            pageCanvas.height = Math.ceil(thisSliceH);
            const ctx = pageCanvas.getContext('2d');
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
            ctx.drawImage(
              canvas,
              0, sliceY, canvas.width, thisSliceH,
              0, 0, canvas.width, thisSliceH
            );

            const sliceData = pageCanvas.toDataURL('image/jpeg', 0.95);
            const sliceHmm = thisSliceH / pxPerMm;
            pdf.addImage(sliceData, 'JPEG', marginX, contentTop, imgW, sliceHmm);

            sliceY = splitY;
            page++;
            // 防止极端情况下死循环
            if (page > 80) {
              break;
            }
          }

          pdf.save(fileName);
          document.body.removeChild(host);
        });
      })
      .catch(function () {
        self.exportPdfViaPrint(fullHtml);
      });
  }

  private exportPdfViaPrint(html: string) {
    const printWindow = window.open('', '_blank', 'width=900,height=700');
    if (!printWindow) {
      alert('请允许浏览器弹出窗口后，再导出 PDF。');
      return;
    }
    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
    setTimeout(function () {
      printWindow.focus();
      printWindow.print();
    }, 400);
  }

  hotelman(hotel) {
    const navigationExtras: NavigationExtras = { queryParams: { 'managerID': hotel.userAccount } };
    this.router.navigate(['/hmmanage'], navigationExtras);
  }
  modifyP(hotel) {
    const navigationExtras: NavigationExtras = { queryParams: { 'managerID': hotel.userAccount } };
    this.router.navigate(['/hmmodifypass'], navigationExtras);
  }
  comp(hotel) {
    const navigationExtras: NavigationExtras = { queryParams: { 'managerID': hotel.userAccount } };
    this.router.navigate(['/hmtask'], navigationExtras);
  }
  main(hotel) {
    const navigationExtras: NavigationExtras = { queryParams: { 'managerID': hotel.userAccount } };
    this.router.navigate(['/hmmain'], navigationExtras);
  }
  hmorder(hotel) {
    const navigationExtras: NavigationExtras = { queryParams: { 'managerID': hotel.userAccount } };
    this.router.navigate(['/hmorder'], navigationExtras);
  }
  hmregister(hotel) {
    const navigationExtras: NavigationExtras = { queryParams: { 'managerID': hotel.userAccount } };
    this.router.navigate(['/hmregister'], navigationExtras);
  }
  hmblog(hotel) {
    const navigationExtras: NavigationExtras = { queryParams: { 'managerID': hotel.userAccount } };
    this.router.navigate(['/hmblog'], navigationExtras);
  }
  hminterview(hotel) {
    const navigationExtras: NavigationExtras = { queryParams: { 'managerID': hotel.userAccount } };
    this.router.navigate(['/hminterview'], navigationExtras);
  }

  ngOnDestroy() {
    if (this.hotelMSub) {
      this.hotelMSub.unsubscribe();
    }
  }
}
