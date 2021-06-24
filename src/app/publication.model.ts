export interface Publication {
    _id: String;
    userAccount:String;//学生的id
    PublicationTitle: String;
    PublicationJournal: String;//刊物
    PublicationDate: String;//时间
    PublicationLink: String;//链接
    PublicationAuthors: String;
    PublicationAbstract: String;
    PublicationLevel:String;
  }