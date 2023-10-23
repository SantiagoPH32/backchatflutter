const { Schema, model, ObjectId } = require("mongoose");

const MensajeSchema = Schema(
  {
    de: {
      type: ObjectId,
      required: true,
      ref: "Usuario",
    },
    para: {
      type: ObjectId,
      required: true,
      ref: "Usuario",
    },
    mensaje: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

MensajeSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  return object;
});

module.exports = model("Mensaje", MensajeSchema);
