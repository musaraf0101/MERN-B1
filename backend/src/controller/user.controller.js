import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const getAllUser = await User.find();

    res.status(200).json({
      success: true,
      message: "data retrive success",
      data: getAllUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server",
      details: error,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, age, address } = req.body;

    const newUser = await User.create({ name, age, address });

    res.status(201).json({
      success: true,
      message: "new user create success",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server",
      details: error,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, address } = req.body;

    const updates = {};

    if (name !== undefined) updates.name = name;
    if (age !== undefined) updates.age = age;
    if (address !== undefined) updates.address = address;

    const updateUser = await User.findByIdAndUpdate(id, updates, { new: true });

    if (!updateUser) {
      return res.status(404).json({
        success: false,
        message: "user not found!",
      });
    }
    res.status(200).json({
      success: true,
      message: "user data updated",
      data: updateUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server",
      details: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const checkUser = await User.findByIdAndDelete(id);

    if (!checkUser) {
      return res.status(404).json({
        success: false,
        message: "user not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "user data delete success",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server",
      details: error,
    });
  }
};
