import mongoose from 'mongoose'

const FAQSchema = new mongoose.Schema({
  question: { type: String, default: '' },
  answer:   { type: String, default: '' },
}, { _id: false })

const BlogSchema = new mongoose.Schema({
  slug:        { type: String, required: true, unique: true, trim: true },
  title:       { type: String, required: true, trim: true },
  metaTitle:   { type: String, default: '' },
  category:    { type: String, required: true },
  date:        { type: String, required: true },
  readTime:    { type: String, required: true },
  description: { type: String, default: '' },
  body:        { type: String, default: '' },
  faqs:        { type: [FAQSchema], default: [] },
}, { timestamps: true })

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema)
