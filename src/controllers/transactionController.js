const Transaction = require('../models/Transaction');

exports.createTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create({
      userId: req.user.id,
      ...req.body
    });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create transaction', error });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch transactions', error });
  }
};
