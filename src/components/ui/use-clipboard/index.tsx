import { useEffect, FC } from 'react';
import { Space, message } from 'antd';
import useClipboard from "react-use-clipboard";

interface IContentType{
    text:string | number;
}

export const UseClipboard:FC<IContentType> = ({text}) => {

    const [messageApi, contextHolder] = message.useMessage();

    const [isCopied, setCopied] = useClipboard(text as string);

    const handleClick= ()=>{
        messageApi.open({
            type: 'success',
            content: 'This is a success message',
          });
    };

    useEffect(()=>{
        if(isCopied) {
            messageApi.success({
                content:`Copied to clipboard ${text}`,
            });
        } 
    }, [isCopied])

  return (
    <div>
        {contextHolder}
        <span onClick={setCopied}>
        <i className='bi bi-copy'></i>
    </span>
    </div>
  )
}
