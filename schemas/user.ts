import { defineField } from 'sanity';

const user = {
  name: 'user',
  title: 'Người dùng',
  type: 'document',
  fields: [
    defineField({
      name: 'isAdmin',
      title: 'Quyền Admin',
      type: 'boolean',
      description: 'Check if the user is admin',
      initialValue: false,
      validation: Rule => Rule.required(),
      //   readOnly: true,
      //   hidden: true,
    }),
    defineField({
      name: 'name',
      title: 'Họ tên',
      type: 'string',
      description: 'Tên của người dùng',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Ảnh',
      type: 'url',
    }),
    defineField({
      name: 'password',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'emailVerified',
      type: 'datetime',
      hidden: true,
    }),
    defineField({
      name: 'about',
      title: 'Ghi chú',
      type: 'text',
      description: 'A brief dsecription about the user',
    }),
  ],
};

export default user;