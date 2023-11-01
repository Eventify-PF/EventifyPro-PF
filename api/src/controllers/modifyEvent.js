const { Events, EventTypes } = require("../db");

const modifyEvent = async (
  id,
  image,
  title,
  location,
  date,
  description,
  status,
  EventTypeId
) => {
  try {
    let updatedEvent = await Events.findOne({ where: { id: id } });
    let newEventTypeId = await EventTypes.findOne({
      where: { id: EventTypeId },
    });
    let updates = {};
    if (title !== undefined) updates.title = title;
    if (image !== undefined) updates.image = image;
    if (date !== undefined) updates.date = date;
    if (location !== undefined) updates.location = location;
    if (description !== undefined) updates.description = description;
    if (status !== undefined) updates.status = status;
    if (status !== undefined)
      updates.EventTypeId = newEventTypeId.dataValues.id;

    await updatedEvent.update({
      title,
      image,
      date,
      location,
      description,
      status,
      EventTypeId,
    });

    return updatedEvent;
  } catch (error) {
    throw new Error("Unable to update this event:" + error.message);
  }
};

module.exports = { modifyEvent };
