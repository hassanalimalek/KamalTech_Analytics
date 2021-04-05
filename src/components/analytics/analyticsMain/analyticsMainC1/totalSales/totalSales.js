import React from 'react';
import cx from 'classnames';
import styles from '../../../../../css/analytics/totalSales.module.scss';
import totalSalesImg from '../../../../../assets/images/totalPurchases.png';
// React Victory ==> Charts
import {VictoryBar, VictoryChart, VictoryAxis} from 'victory';

function TotalSales() {
  const data = [
    {shop: 1, earnings: 2000},
    {shop: 2, earnings: 3500},
    {shop: 3, earnings: 5250},
    {shop: 4, earnings: 1000},
    {shop: 5, earnings: 6000},
    {shop: 6, earnings: 8000},
  ];

  return (
    <div className=" divBorder">
      <div className={cx(styles.totalSales, '')}>
        <div
          className={cx(
            'd-flex flex-row justify-content-between',
            styles.headerBar
          )}
        >
          <div className={cx(styles.headerBar_totalSales)}>
            <div className={cx(styles.totalSales_ImgWrapper)}>
              <img
                alt="User Profile Img"
                src={totalSalesImg}
                className={cx(styles.totalSalesImg)}
              />
            </div>
            <div className={cx(styles.totalSales_BasicDetails)}>
              <p className={cx(styles.totalSales_saleFigure)}>$2,315.00</p>
              <p className={cx(styles.totalSales_saleType)}>Total Sales</p>
            </div>
          </div>
          <div className={cx(styles.headerBar_salesDetails)}>
            <div className={cx(styles.byCash)}>
              <p>By Cash</p>
              <p className={cx(styles.byCashValue)}>$250</p>
            </div>
            <div className={cx(styles.byHand)}>
              <p>By Hand</p>
              <p className={cx(styles.byHandValue)}>$250</p>
            </div>
            <div></div>
          </div>
        </div>
        <div className={cx(styles.graphContainer)}>
          <VictoryChart
            // domainPadding will add space to each side of VictoryBar to
            // prevent it from overlapping the axis
            domainPadding={30}
            padding={{top: 10, bottom: 50, left: 80, right: 80}}
          >
            <VictoryAxis
              // tickValues specifies both the number of ticks and where
              // they are placed on the axis
              // tickValues={[1, 2, 3, 4, 5, 6, 7, 8]}
              tickFormat={[
                'Shop A',
                'Shop B',
                'Shop C',
                'Shop D',
                'Shop E',
                'Web Store',
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
              height={200}
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
              horizontal
              style={{
                data: {
                  fill: '#13cb69',
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

export default TotalSales;
