import { Subject } from 'rxjs';

export class ContactService {

    contactsSubject = new Subject<any[]>();

    private contacts = [
        {
            id: 1,
            name: 'Jean Bidule',
            address: 'rue de Bidule 75000 Bidule',
            phone: '0100000000',
            email: 'bidule@gmail.com'
        },
        {
            id: 2,
            name: 'Georges Machin',
            address: 'rue de Machin 75000 Machin',
            phone: '0100000001',
            email: 'machin@gmail.com'
        },
        {
            id: 3,
            name: 'Olivier Truc',
            address: 'rue de Truc 75000 Truc',
            phone: '0100000002',
            email: 'truc@gmail.com'
        }
    ];

    getContactById(id: number) {
        const contact = this.contacts.find(
          (s) => {
            return s.id === id;
          }
        );
        return contact;
    }

    emitContactSubject() {
        this.contactsSubject.next(this.contacts.slice());
    }

    addContact(name: string, address: string, phone: string, email: string) {
        console.log('Test ajout');
        const contactObject = {
          id: 0,
          name: '',
          address: '',
          phone: '',
          email: ''
        };
        contactObject.name = name;
        contactObject.address = address;
        contactObject.phone = phone;
        contactObject.email = email;
        contactObject.id = this.contacts[(this.contacts.length - 1)].id + 1;
        this.contacts.push(contactObject);
        this.emitContactSubject();
    }
}
