import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import React from 'react';
import './index.scss';
export default class CardComponent extends React.Component {
    render(){
        return(
            <WingBlank size="lg">
                <WhiteSpace size="lg" />
                <Card>
                    <Card.Header
                        title="This is title"
                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                        extra={<span>this is extra</span>}
                    />
                    <Card.Body>
                        <div >This is content of `Card`</div>
                    </Card.Body>
                    <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                </Card>
                <WhiteSpace size="lg" />

                <div className='card-dec' >This is content of `Card`</div>
            </WingBlank> 
        )
    }
}
