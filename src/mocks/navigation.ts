export interface NavigationStep {
  id: number
  title: string
  description: string
  time: string
  cost: number
  completed: boolean
}

export interface NavigationFlow {
  steps: NavigationStep[]
  totalTime: string
  totalCost: number
}

export const positionSetupSteps: NavigationStep[] = [
  {
    id: 1,
    title: "Position Analysis",
    description: "Analyze market conditions and pair performance",
    time: "2-3 min",
    cost: 0,
    completed: true
  },
  {
    id: 2,
    title: "Strategy Selection",
    description: "Choose optimal strategy based on analysis",
    time: "1-2 min",
    cost: 0,
    completed: true
  },
  {
    id: 3,
    title: "Risk Assessment",
    description: "Evaluate risk parameters and adjust strategy",
    time: "2-4 min",
    cost: 0,
    completed: false
  },
  {
    id: 4,
    title: "Execution",
    description: "Deploy strategy with final confirmation",
    time: "1-2 min",
    cost: 25,
    completed: false
  }
]

export const executionSteps: NavigationStep[] = [
  {
    id: 1,
    title: "Connect Wallet",
    description: "Connect your preferred wallet",
    time: "1 min",
    cost: 0,
    completed: true
  },
  {
    id: 2,
    title: "Review Strategy",
    description: "Final review of strategy parameters",
    time: "2 min",
    cost: 0,
    completed: true
  },
  {
    id: 3,
    title: "Confirm Transaction",
    description: "Approve and execute transaction",
    time: "1-2 min",
    cost: 25,
    completed: false
  },
  {
    id: 4,
    title: "Monitor Performance",
    description: "Track strategy performance and metrics",
    time: "Ongoing",
    cost: 0,
    completed: false
  }
]

export const getNavigationFlow = (type: 'setup' | 'execution'): NavigationFlow => {
  const steps = type === 'setup' ? positionSetupSteps : executionSteps
  const totalTime = type === 'setup' ? "6-11 min" : "4-5 min"
  const totalCost = type === 'setup' ? 25 : 25
  
  return { steps, totalTime, totalCost }
}
