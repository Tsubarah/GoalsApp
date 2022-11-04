import BounceLoader from 'react-spinners/BounceLoader'

export default function LoadingSpinner() {

	return (
		<div id="loading-spinner">
			<BounceLoader size={150} color="#77a5c9" />
		</div>
	)
}