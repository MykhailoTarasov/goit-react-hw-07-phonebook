import { Hourglass } from 'react-loader-spinner';
import { StyledLoader } from './Loader.Styled';

const Loader = () => {
    return (
        <StyledLoader>
            <Hourglass
            visible={true}
            height="40"
            width="40"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#5dd7d2', '#5dd7d2']}
          />
        </StyledLoader>
    )
}

export default Loader;