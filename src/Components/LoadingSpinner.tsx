import BounceLoader from 'react-spinners/BounceLoader'
import { useAuthContext } from '../Contexts/AuthContext'

export default function LoadingSpinner() {
	const { loading } = useAuthContext()

	return loading ? (
		<div id="loading-spinner">
			<BounceLoader size={150} color="#77a5c9" />
		</div>
	) : null;
}