/**
 * @File Name          : ContactListController.cls
 * @Description        : 
 * @Author             : aishwarya.jange@eternussolutions.com
 * @Group              : 
 * @Last Modified By   : aishwarya.jange@eternussolutions.com
 * @Last Modified On   : 9/12/2019, 3:12:41 pm
 * @Modification Log   : 
 * Ver       Date            Author      		    Modification
 * 1.0    9/12/2019   aishwarya.jange@eternussolutions.com     Initial Version
**/
public class ContactListController {

    public List<Contact> contacts  { get; set; }
    
    /**
    * @returns or fetches list of contacts from database 
    * @author aishwarya.jange@eternussolutions.com | 9/12/2019 
    * @return List<Contact> 
    **/
    @AuraEnabled
    public static List<Contact> getContactList(){
       List<Contact> contactList = new List<Contact>([SELECT
                                                            Id,
                                                            LastName
                                                       FROM
                                                            Contact
                                                       WHERE
                                                            Email != null
                                                    ]);
                return contactList;
    }
}