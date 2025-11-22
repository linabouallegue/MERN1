import Owner from "../models/Owner.js";

// CREATE
export const createOwner = async (req, res) => {
  try {
    const owner = await Owner.create(req.body);
    res.status(201).json(owner);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// READ all
export const getOwners = async (req, res) => {
  const owners = await Owner.find();
  res.json(owners);
};

// READ one
export const getOwnerById = async (req, res) => {
  try {
    const owner = await Owner.findById(req.params.id);
    if (!owner) return res.status(404).json({ message: "Propriétaire non trouvé" });
    res.json(owner);
  } catch {
    res.status(400).json({ message: "ID invalide" });
  }
};

// UPDATE
export const updateOwner = async (req, res) => {
  try {
    const owner = await Owner.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!owner) return res.status(404).json({ message: "Propriétaire non trouvé" });
    res.json(owner);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE
export const deleteOwner = async (req, res) => {
  try {
    const owner = await Owner.findByIdAndDelete(req.params.id);
    if (!owner) return res.status(404).json({ message: "Propriétaire non trouvé" });
    res.json({ message: "Propriétaire supprimé" });
  } catch {
    res.status(400).json({ message: "ID invalide" });
  }
};
