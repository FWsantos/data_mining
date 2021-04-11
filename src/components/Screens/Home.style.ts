
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: '#282c34',
            textAlign: 'center',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '100px',
        },
        texto: {
            fontSize: '100px',
        },
        paperOutput: {
            margin: '10px',
            // // backgroundColor: '#122122',
            textAlign: 'center',
            // height:400,
            width:400,
            // minHeight: '100vh',
            display: 'flex',
            // flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            // fontSize: '100px',
        },
        inputConfig: {
            // color: '#ffffff',
            // backgroundColor: '#ffffff'
        },
    }),
);

export default useStyles;