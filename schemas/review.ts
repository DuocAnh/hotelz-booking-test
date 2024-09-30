import { defineField } from 'sanity';

const review = {
  name: 'review',
  title: 'Đánh giá',
  type: 'document',
  fields: [
    defineField({
      name: 'user',
      title: 'Người dùng',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'hotelRoom',
      title: 'Phòng',
      type: 'reference',
      to: [{ type: 'hotelRoom' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Nội dung đánh giá',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'userRating',
      title: 'Điểm',
      type: 'number',
      validation: Rule =>
        Rule.required().min(1).max(5).error('Rating must be between 1 and 5'),
    }),
  ],
};

export default review;
