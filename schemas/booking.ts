import { defineField } from 'sanity';

const booking = {
  name: 'booking',
  title: 'Quản lý đặt phòng',
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
      name: 'checkinDate',
      title: 'Ngày nhận phòng',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'checkoutDate',
      title: 'Ngày trả phòng',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'numberOfDays',
      title: 'Số ngày ở',
      type: 'number',
      initialValue: 1,
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'discount',
      title: 'Giảm giá',
      type: 'number',
      initialValue: 0,
      validation: Rule => Rule.required().min(0),
    }),
    defineField({
      name: 'adults',
      title: 'Người lớn',
      type: 'number',
      initialValue: 1,
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'children',
      title: 'Trẻ em',
      type: 'number',
      initialValue: 0,
      validation: Rule => Rule.required().min(0),
    }),
    defineField({
      name: 'totalPrice',
      title: 'Tổng tiền',
      type: 'number',
      validation: Rule => Rule.required().min(0),
    }),
  ],
};

export default booking;