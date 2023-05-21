import { Radar } from "@ant-design/charts";
import React from 'react';

export const CvSkills = () => {
    // 数据更新于 2021.01.09
    const data = [
      {
        name: 'JavaScript',
        star: 10371,
      },
      {
        name: 'CSS3',
        star: 10300,
      },
      {
        name: 'HTML5',
        star: 12900,
      },
      {
        name: 'SQL',
        star: 5500,
      },
      {
        name: 'NodeJS',
        star: 3600,
      },
      {
        name: 'MongoDB',
        star: 4200,
      },
      {
        name: 'React',
        star: 9600,
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