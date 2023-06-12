import { Radar } from "@ant-design/charts";
import React from 'react';

export const CvSkills = () => {
    // 数据更新于 2021.01.09
    const data = [
      {
        name: 'JavaScript',
        star: 63,
      },
      {
        name: 'CSS3',
        star: 66,
      },
      {
        name: 'HTML5',
        star: 100,
      },
      {
        name: 'SQL',
        star: 68,
      },
      {
        name: 'NodeJS',
        star: 26,
      },
      {
        name: 'MongoDB',
        star: 44,
      },
      {
        name: 'React',
        star: 76,
      },
    ];
    const config = {
      data: data.map((d) => ({ ...d, star: Math.sqrt(d.star) })),
      xField: 'name',
      yField: 'star',
      appendPadding: [0, 10, 0, 10],
      meta: {
        star: {
          alias: 'Dominio',
          min: 0,
          nice: true,
          formatter: (v) => Number(v).toFixed(2),
        },
      },
      xAxis: {
        tickLine: null,
      },
      yAxis: {
        label: false,
        grid: {
          alternateColor: 'rgba(0, 0, 0, 0.04)',
        },
      },
      // 开启辅助点
      point: {
        size: 2,
      },
      area: {},
    };
    return <Radar {...config} />;
  };