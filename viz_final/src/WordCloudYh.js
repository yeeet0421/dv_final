import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3-cloud';

const WordCloud = () => {
  // 在這裡設定初始狀態

  const words = ['apple', 'banana', 'orange', 'grape', 'strawberry'];
  const frequencyList = words.map(word => ({ text: word, size: 10 + Math.random() * 90 }));

  // 使用 useRef 創建一個可參考 DOM 元素的 ref
  const containerRef = useRef(null);

  useEffect(() => {
    // 在這裡渲染文字雲
    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;

    const layout = d3.layout.cloud().words(frequencyList)
      .size([width, height])
      .padding(5)
      .rotate(() => Math.round(Math.random() * 2 - 1) * 90)
      .font('Impact')
      .fontSize(d => d.size)
      .on('end', draw);

    layout.start();

    function draw(words) {
      d3.select(containerRef.current)
        .append('svg')
        .attr('width', layout.size()[0])
        .attr('height', layout.size()[1])
        .append('g')
        .attr('transform', `translate(${layout.size()[0] / 2}, ${layout.size()[1] / 2})`)
        .selectAll('text')
        .data(words)
        .enter()
        .append('text')
        .style('font-size', d => `${d.size}px`)
        .style('font-family', layout.font())
        .style('fill', () => `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)})`)
        .attr('text-anchor', 'middle')
        .attr('transform', d => `translate(${d.x}, ${d.y})rotate(${d.rotate})`)
        .text(d => d.text);
    }
  }, []); // 使用空陣列，確保 effect 只會在初始化時執行一次

  // 在這裡渲染 DOM 元素
  return (
    <div
      ref={containerRef}
      style={{ width: '80%', height: '70%', margin: '0 auto' }}
    ></div>
  );
};
console.log(d3)

export default WordCloud;