const Slot = require("../models/Slot");

exports.createSlot = async (req, res) => {
    try {
        const { start, end } = req.body;

        if (!start || !end) {
            return res.status(400).json({ message: "Missing start/end" });
        }

        const slot = await Slot.create({ start, end });

        res.status(201).json(slot);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.updateSlot = async (req, res) => {
    try {
        const { id } = req.params;
        const { start, end } = req.body;

        // check that even one field is updated
        if (!start && !end) {
            return res.status(400).json({ message: "Nothing to update" });
        }

        const updatedSlot = await Slot.findByIdAndUpdate(
            id,
            { start, end },
            { new: true, runValidators: true }
        );

        if (!updatedSlot) {
            return res.status(404).json({ message: "Slot not found" });
        }

        res.status(200).json(updatedSlot);

    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};