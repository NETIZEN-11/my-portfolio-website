const Contact = require('../models/Contact');

const contactController = {
  async storeMessage(req, res, next) {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          error: 'All fields are required'
        });
      }

      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          error: 'Please enter a valid email address'
        });
      }

      const contact = new Contact({ name, email, message });
      await contact.save();

      res.status(201).json({
        success: true,
        message: 'Message sent successfully!'
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = contactController;