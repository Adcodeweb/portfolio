
export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [{
    name: "title",
    title: "Title",
    type: "string"
  }, {
    name: "overview",
    title: "Overview",
    type: "string"
  },

  {
    name: "status",
    title: "Status",
    type: "string"
  }, {
    name: "imageurl",
    title: "ImgUrl",
    type: "image",
    options: {
      hotspot: true
    }
  }, {
    name: 'tags',
    title: 'Tags',
    type: 'array',
    of: [
      {
        name: 'tag',
        title: 'Tag',
        type: 'string'
      }
    ]
  },
  {
    name: 'images',
    title: 'Images',
    type: 'array',
    of: [
      {
        name: 'imageurl',
        title: 'Images',
        type: 'image',
        options: {
          hotspot: true
        }
      }
    ]
  },
  {
    name: 'projectLink',
    title: 'Project Link',
    type: 'string',
  },
  {
    name: 'codeLink',
    title: 'Code Link',
    type: 'string',
  }, {
    name: 'moreInfo',
    title: 'More Info',
    type: 'array',
    of: [
      {
        name: "section",
        title: "Section",
        type: "object",
        fields: [{
          name: "title",
          title: "Title",
          type: "string"
        }, {
          name: "info",
          title: "Info",
          type: "string"
        }]
      }
    ]
  },]
}