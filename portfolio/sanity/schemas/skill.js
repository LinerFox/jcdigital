export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "skillTitle",
      title: "Skill Title",
      type: "string",
    },
    {
      name: "skillimage",
      title: "Skill Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "progress",
      title: "Progress",
      type: "number",
      description: "Progress Skill from 0% to 100%",
      validation: (Rule) => Rule.min(0).max(100),
    },
  ],
};
