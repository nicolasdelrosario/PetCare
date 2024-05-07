interface INavItem {
	to: string
	children: React.ReactNode
	activeStyle?: string
	onClick?: () => void
}
