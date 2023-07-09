import contactsService from "./contacts.js";
import yargs from "yargs";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const listContacts = await contactsService.listContacts();
      return console.log(listContacts);
    case "get":
      const oneContact = await contactsService.getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await contactsService.addContact({
        name,
        email,
        phone,
      });
      return console.log(newContact);
    case "remove":
      const deleteContact = await contactsService.removeContact(id);
      return console.log(deleteContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);