import type { Metadata } from 'next'
import ConsultationForm from './ConsultationForm'

export const metadata: Metadata = {
  title: 'Book Consultation | Free Space Assessment | Elevated Interiors',
  description: 'Book your free consultation to transform your GTA home. Get expert assessment, transparent pricing, and a clear plan using The Loveable Spaces Framework™.',
}

export default function ConsultationPage() {
  return <ConsultationForm />
}
