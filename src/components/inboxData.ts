export type Channel = 'IG' | 'TT' | 'WA' | 'EM' | 'SMS'

export interface Conversation {
  id: string
  name: string
  initials: string
  avatarColor: string
  channel: Channel
  preview: string
  time: string
  active?: boolean
  unread?: boolean
}

export const CONVERSATIONS: Conversation[] = [
  {
    id: 'jordan-miller',
    name: 'Jordan Miller',
    initials: 'JM',
    avatarColor: '#14b8a6',
    channel: 'IG',
    preview: 'Lead automatically tagged as HOT',
    time: 'Just now',
    active: true,
  },
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    initials: 'SC',
    avatarColor: '#f472b6',
    channel: 'TT',
    preview: 'Can I get tracking for order #4892?',
    time: '2m',
  },
  {
    id: 'marcus-johnson',
    name: 'Marcus Johnson',
    initials: 'MJ',
    avatarColor: '#38bdf8',
    channel: 'WA',
    preview: 'Yes, the bundle works for me.',
    time: '14m',
  },
  {
    id: 'emily-davis',
    name: 'Emily Davis',
    initials: 'ED',
    avatarColor: '#fb923c',
    channel: 'EM',
    preview: 'Refund requested - please advise',
    time: '1h',
  },
  {
    id: 'liam-wilson',
    name: 'Liam Wilson',
    initials: 'LW',
    avatarColor: '#a78bfa',
    channel: 'IG',
    preview: 'Love the new drop! 🔥',
    time: '2h',
  },
  {
    id: 'chloe-kim',
    name: 'Chloe Kim',
    initials: 'CK',
    avatarColor: '#4ade80',
    channel: 'SMS',
    preview: 'Do you restock the small sizes?',
    time: '3h',
    unread: true,
  },
  {
    id: 'noah-martinez',
    name: 'Noah Martinez',
    initials: 'NM',
    avatarColor: '#facc15',
    channel: 'WA',
    preview: 'Thanks, got it.',
    time: '4h',
  },
  {
    id: 'olivia-taylor',
    name: 'Olivia Taylor',
    initials: 'OT',
    avatarColor: '#fb7185',
    channel: 'IG',
    preview: 'Can I use this discount code twice?',
    time: '5h',
  },
  {
    id: 'james-anderson',
    name: 'James Anderson',
    initials: 'JA',
    avatarColor: '#60a5fa',
    channel: 'EM',
    preview: 'Wholesale inquiry for Q3',
    time: 'Yesterday',
  },
  {
    id: 'ava-thomas',
    name: 'Ava Thomas',
    initials: 'AT',
    avatarColor: '#c084fc',
    channel: 'TT',
    preview: 'How long does shipping take?',
    time: 'Yesterday',
  },
  {
    id: 'william-jackson',
    name: 'William Jackson',
    initials: 'WJ',
    avatarColor: '#34d399',
    channel: 'SMS',
    preview: 'Address update needed',
    time: 'Yesterday',
  },
]

export const CHANNEL_LABEL: Record<Channel, string> = {
  IG: 'IG',
  TT: 'TT',
  WA: 'WA',
  EM: 'EM',
  SMS: 'SMS',
}
