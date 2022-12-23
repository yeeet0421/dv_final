import React from 'react';

const WordCloud = () => {
  // 在這裡設定初始狀態

  const words = ['apple', 'banana', 'orange', 'grape', 'strawberry'];

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '50%',
        borderRadius: '50%',
        overflow: 'hidden',
      }}
    >
      {/* 這裡是文字雲的渲染程式碼 */}
      {words.map(word => (
        <div
          key={word}
          style={{
            fontSize: `${Math.floor(Math.random() * 40 + 20)}px`,
            color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
              Math.random() * 255
            )}, ${Math.floor(Math.random() * 255)})`,
            position: 'relative',
            top: `${Math.floor(Math.random() * 100 - 50)}px`,
            left: `${Math.floor(Math.random() * 100 - 50)}px`,
          }}
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default WordCloud;