import React from 'react';
import cx from 'classnames';
import styles from '../../../../../css/analytics/totalPurchases.module.scss';
import totalPurchaseImg from '../../../../../assets/images/totalPurchases.png';
// React Victory ==> Charts
import {VictoryBar, VictoryChart, VictoryAxis} from 'victory';

function TotalPurchases() {
  const data = [
    {shop: 1, earnings: 2000},
    {shop: 2, earnings: 3500},
    {shop: 3, earnings: 5250},
    {shop: 4, earnings: 1000},
    {shop: 5, earnings: 6000},
    {shop: 6, earnings: 8000},
  ];
  return (
    <div className="divBorder">
      <div className={cx(styles.totalPurchase, '')}>
        <div className={cx(styles.headerBar, 'd-flex')}>
          <div className={cx(styles.headerBar_totalPurchase)}>
            <div className={cx(styles.totalPurchase_ImgWrapper)}>
              <img
                src={totalPurchaseImg}
                alt="User Profile Img"
                className={cx(styles.totalPurchaseImg)}
              />
            </div>
            <div className={cx(styles.totalPurchase_BasicDetails)}>
              <p className={cx(styles.totalPurchase_saleFigure)}>$2,315.00</p>
              <p className={cx(styles.totalPurchase_saleType)}>
                Total Purchase
              </p>
            </div>
          </div>
        </div>
        <div className={cx(styles.graphContainer)}>
          <VictoryChart
            // domainPadding will add space to each side of VictoryBar to
            // prevent it from overlapping the axis
            domainPadding={20}
            padding={{top: 20, bottom: 40, left: 40, right: 40}}
          >
            <VictoryAxis
              // tickValues specifies both the number of ticks and where
              // they are placed on the axis
              // tickValues={[1, 2, 3, 4, 5, 6, 7, 8]}
              tickFormat={[
                'Product A',
                'Product B',
                'Product C',
                'Product D',
                'Product E',
                'Product F',
              ]}
            />
            <VictoryAxis
              dependentAxis
              // tickFormat specifies how ticks should be displayed

              tickFormat={(x) => `$${x / 1000}k`}
              // tickValues={[2.11, 3.9, 6.1, 8.05, 10]}
              // tickFormat={(x) => `${Math.round(x)}k`}
            />
            <VictoryBar
              animate={{
                duration: 1500,
                onLoad: {duration: 1000},
              }}
              // cornerRadius={{bottom: '20px'}}
              data={data}
              cornerRadius={{top: 5, bottom: 5}}
              alignment="end"
              x="shop"
              y="earnings"
              style={{
                data: {
                  fill: '#FFC303',
                  width: 8,
                  fontSize: 20,
                },
              }}
            />
          </VictoryChart>
        </div>
      </div>
    </div>
  );
}

export default TotalPurchases;
