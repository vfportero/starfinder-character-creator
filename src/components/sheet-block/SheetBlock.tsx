import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BlockTitle from '../block-title/BlockTitle';

const useStyles = makeStyles(theme => ({
    inner: {
        border: '1px solid',
        marginTop: -14,
        marginLeft: 16,
        paddingTop: 19,
        paddingBottom: 10
    }
}));

type Props = {
    children: ReactNode,
    title: string
}


const SheetBlock: React.FC<Props> = (props) => {

    const classes = useStyles();

    return (
        <div>
            <BlockTitle Title={props.title} />
            <div className={classes.inner}>
                {props.children}
            </div>
        </div>
    );
}

export default SheetBlock;
