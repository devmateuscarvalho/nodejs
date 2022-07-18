const Contact = require('../models/Contact');

const main = (req, res) => {
  res.send('Olá dev, essa é a API de Contatos.');
};

const readAll = async (req, res) => {
  try {
    let contacts = await Contact.find();
    const contactsNew = contacts.map((contact) => ({
      id: contact._id,
      name: contact.name,
      number: contact.number,
    }));

    res.json({ data: contactsNew, success: true });
  } catch (error) {
    res.send(error);
  }
};

const addContact = async (req, res) => {
  let bodyReq = new Contact(req.body);
  try {
    let newContact = await bodyReq.save();
    const fixData = {
      data: {
        id: newContact._id,
        name: newContact.name,
        number: newContact.number,
      },
      success: true,
    };
    res.json(fixData);
  } catch (error) {
    res.send(error);
  }
};

const editContact = async (req, res) => {
  try {
    let toEdit = await Contact.findByIdAndUpdate(req.body.id, {
      name: req.body.name,
      number: req.body.number,
    });
    res.json({ modified: toEdit, success: true });
  } catch (error) {
    res.send(error);
  }
};

const deleteContact = async (req, res) => {
  let id = req.params.id;
  try {
    let toRemove = await Contact.findByIdAndDelete(id);
    res.send({ removed: toRemove, success: true });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { main, readAll, addContact, editContact, deleteContact };
