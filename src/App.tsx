import './App.scss'
import { BlogCard } from './components/molecules/main-page'
import { ContactUs } from './components/molecules/main-page/contact'
// import AppDemo from './components/molecules/main-page/app-demo'
import FeatureCard from './components/molecules/main-page/features-card'
import { Footer } from './components/molecules/main-page/footer'
import Header from './components/molecules/main-page/header'
import InfoCard from './components/molecules/main-page/info-card'
import PromoCard from './components/molecules/main-page/promo-card'
import ServiceCard from './components/molecules/main-page/service-card'

const HomePage = () => {
  return (
    <div className="mx-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
      <Header />
      <InfoCard />
      <ServiceCard />
      <FeatureCard />
      <PromoCard />
      {/* <AppDemo /> */}
      <BlogCard />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default function App() {
  return <HomePage />
}

// import { useEffect, useState } from 'react'
// import {
//   Call,
//   CallControls,
//   StreamCall,
//   StreamTheme,
//   StreamVideo,
//   SpeakerLayout,
//   StreamVideoClient,
// } from '@stream-io/video-react-sdk'
// import '@stream-io/video-react-sdk/dist/css/styles.css'
// import './App.scss'

// // NOTE: This will generate a new call on every reload
// // Fork this CodeSandbox and set your own CallID if
// // you want to test with multiple users or multiple tabs opened
// const callId = 'csb-' + Math.random().toString(16).substring(2)
// const user_id = 'csb-user'
// const user = { id: user_id }

// const apiKey = 'mmhfdzb5evj2'
// const tokenProvider = async () => {
//   const { token } = await fetch(
//     'https://pronto.getstream.io/api/auth/create-token?' +
//       new URLSearchParams({
//         api_key: apiKey,
//         user_id: user_id,
//       }),
//   ).then((res) => res.json())
//   return token as string
// }

// export default function App() {
//   const [client, setClient] = useState<StreamVideoClient>()
//   const [call, setCall] = useState<Call>()

//   useEffect(() => {
//     const myClient = new StreamVideoClient({ apiKey, user, tokenProvider })
//     setClient(myClient)
//     return () => {
//       myClient.disconnectUser()
//       setClient(undefined)
//     }
//   }, [])

//   useEffect(() => {
//     if (!client) return
//     const myCall = client.call('default', callId)
//     myCall.join({ create: true }).catch((err) => {
//       console.error(`Failed to join the call`, err)
//     })

//     setCall(myCall)

//     return () => {
//       setCall(undefined)
//       myCall.leave().catch((err) => {
//         console.error(`Failed to leave the call`, err)
//       })
//     }
//   }, [client])

//   if (!client || !call) return null

//   return (
//     <StreamVideo client={client}>
//       <StreamTheme className="my-theme-overrides">
//         <StreamCall call={call}>
//           <SpeakerLayout />
//           <CallControls />
//         </StreamCall>
//       </StreamTheme>
//     </StreamVideo>
//   )
// }
