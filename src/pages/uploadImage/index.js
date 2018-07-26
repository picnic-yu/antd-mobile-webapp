import React from 'react';

import { ImagePicker, WingBlank, SegmentedControl , Button } from 'antd-mobile';
const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
  }, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
}];
export default class UploadImage extends React.Component {
    state = {
        files: data,
        multiple: false,
    }
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    }
    uploadImage = () => {
        let obj  =this.state.files[0].file;
        
        var formData = new FormData();
        
        formData.append('file', obj); 
        console.log(formData.get("file"))
        console.log(this.state.files);
        
        fetch('/api/v1/upload', {
            method: 'POST',
            headers:{'Content-Type':'multipart/form-data;boundary=----WebKitFormBoundarygMA4j1ALlxMDETOB','path':'img'},
            body: formData // 这里是请求对象
        })
        .then((res)=>{
            return res.text()
        })
        .then((res)=>{
            console.log(res)
        })
    }
    onSegChange = (e) => {
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
          multiple: index === 1,
        });
    }
    
    render() {
        const { files } = this.state;
        return (
            <div>
                <WingBlank>
                    <SegmentedControl
                    values={['切换到单选', '切换到多选']}
                    selectedIndex={this.state.multiple ? 1 : 0}
                    onChange={this.onSegChange}
                    />
                    <ImagePicker
                    files={files}
                    onChange={this.onChange}
                    onImageClick={(index, fs) => console.log(index, fs)}
                    selectable={files.length < 5}
                    multiple={this.state.multiple}
                    />
                </WingBlank>
                <Button onClick={this.uploadImage}>submit</Button>  
            </div>
            
        )
    }
}