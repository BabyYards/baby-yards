import {
  StreamVideoClient,
  StreamVideo,
  User,
  StreamCall,
  useCall,
  useCallStateHooks,
  ParticipantView,
} from '@stream-io/video-react-sdk'

const apiKey = 'XXXX'
const token = 'XXXX'
const userId = 'XXXX '
const callId = ' XXXX'

const user: User = { id: userId, name: 'Tutorial' }
const client = new StreamVideoClient({ apiKey, user, token })
const call = client.call('livestream', callId)
call.join({ create: true })

export default function App() {
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <LivestreamView />
      </StreamCall>
    </StreamVideo>
  )
}

const LivestreamView = () => {
  const {
    useCameraState,
    useMicrophoneState,
    useParticipantCount,
    useIsCallLive,
    useParticipants,
  } = useCallStateHooks()

  const { camera: cam, isEnabled: isCamEnabled } = useCameraState()
  const { microphone: mic, isEnabled: isMicEnabled } = useMicrophoneState()

  const participantCount = useParticipantCount()
  const isLive = useIsCallLive()

  const [firstParticipant] = useParticipants()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div>{isLive ? `Live: ${participantCount}` : `In Backstage`}</div>
      {firstParticipant ? (
        <ParticipantView participant={firstParticipant} />
      ) : (
        <div>The host hasn't joined yet</div>
      )}
      <div style={{ display: 'flex', gap: '4px' }}>
        <button onClick={() => (isLive ? call.stopLive() : call.goLive())}>
          {isLive ? 'Stop Live' : 'Go Live'}
        </button>
        <button onClick={() => cam.toggle()}>
          {isCamEnabled ? 'Disable camera' : 'Enable camera'}
        </button>
        <button onClick={() => mic.toggle()}>
          {isMicEnabled ? 'Mute Mic' : 'Unmute Mic'}
        </button>
      </div>
    </div>
  )
}
