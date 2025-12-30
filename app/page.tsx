import CompanionsCard from '@/components/CompanionsCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
   <main>
      <h1 className='text-2xl underline' >Popular Companions</h1>
      <section className='home-section'>
       <CompanionsCard
       id="123"
       name="Neura the Brainy Explorer"
       topic=" Neural Network of the Brain"
       subject="Science"
       duration={45}
       color="#ffdafe"
       />
         <CompanionsCard
       id="234"
       name="Countsy the Number Wizard"
       topic=" Derivatives & Integrals"
       subject="Math"
       duration={30}
       color="#e5d0ff"
       />
         <CompanionsCard
       id="456"
       name="Verba the Vocabulary Builder"
       topic="English Literature"
       subject="Language"
       duration={30}
       color="#BDE7FF"
       />
       
      </section>
      <section className='home-section'>
        <CompanionsList
         title="Recently completed session"
         companions={recentSessions}
         classNames="w-2/3 max-lg:w-full"
        />
         <CTA/>
      </section>
    </main>
  )
}

export default Page