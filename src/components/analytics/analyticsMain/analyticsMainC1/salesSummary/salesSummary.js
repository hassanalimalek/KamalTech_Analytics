import React from 'react';
import styles from '../../../../../css/analytics/salesSummary.module.scss';
import cx from 'classnames';
// React Victory ==> Charts
import {VictoryPie} from 'victory';
import ProgressBar from '@ramonak/react-progress-bar';

function SalesSummary() {
  let data = [
    {x: 'Repair', y: 85},
    {x: 'Recharge', y: 130},
    {x: 'Mobiles', y: 25},
    {x: 'Sim Card', y: 12},
    {x: 'Accessories', y: 140},
  ];

  return (
    <div className=" divBorder">
      <div className={cx(styles.salesSummary, '')}>
        <div className={styles.salesSummaryMain}>
          <div className={styles.salesSummaryHeader}>
            <h4>Sales Summary</h4>
            <div>
              <button>OverAll</button>
              <button>Today</button>
            </div>
          </div>
          <div className={cx(styles.salesSummaryGraph, 'container')}>
            <div className={'row'}>
              <div className={cx(styles.graph, 'col-sm-12 col-md-6')}>
                <VictoryPie
                  animate={{
                    duration: 2000,
                  }}
                  padding={{top: 10, bottom: 20, left: 80, right: 80}}
                  colorScale={[
                    '#1F78B4',
                    '#AEC7E8',
                    '#FF7F10',
                    '#2CA02C',
                    '#FFBB78',
                  ]}
                  data={data}
                />
              </div>
              <div className={cx(styles.bars, 'col-sm-12,col-md-6 p-2')}>
                <div className={styles.barsDiv}>
                  <div className={styles.barDiv}>
                    <div className={styles.barDivTopBar}>
                      <h4>{data[0].x}</h4>
                      <h4>{data[0].y}</h4>
                    </div>
                    <ProgressBar
                      width="100%"
                      isLabelVisible={false}
                      completed={64}
                      height="8px"
                      bgcolor="#1F78B4"
                    />
                    <div className={styles.barDivBottomBar}>
                      <h4>$2750</h4>
                    </div>
                  </div>
                  <div className={styles.barDiv}>
                    <div className={styles.barDivTopBar}>
                      <h4>{data[1].x}</h4>
                      <h4>{data[1].y}</h4>
                    </div>
                    <ProgressBar
                      className={styles.barProgressOne}
                      width="100%"
                      completed={60}
                      height="8px"
                      bgcolor="#AEC7E8"
                      isLabelVisible={false}
                    />
                    <div className={styles.barDivBottomBar}>
                      <h4>$2750</h4>
                    </div>
                  </div>
                </div>
                <div className={styles.barsDiv}>
                  <div className={styles.barDiv}>
                    <div className={styles.barDivTopBar}>
                      <h4>{data[2].x}</h4>
                      <h4>{data[2].y}</h4>
                    </div>
                    <ProgressBar
                      width="100%"
                      isLabelVisible={false}
                      completed={64}
                      height="8px"
                      bgcolor="#FF7F10"
                    />
                    <div className={styles.barDivBottomBar}>
                      <h4>$2750</h4>
                    </div>
                  </div>
                  <div className={styles.barDiv}>
                    <div className={styles.barDivTopBar}>
                      <h4>{data[3].x}</h4>
                      <h4>{data[3].y}</h4>
                    </div>
                    <ProgressBar
                      className={styles.barProgressOne}
                      width="100%"
                      completed={20}
                      height="8px"
                      bgcolor="#2CA02C"
                      isLabelVisible={false}
                    />
                    <div className={styles.barDivBottomBar}>
                      <h4>$2750</h4>
                    </div>
                  </div>
                </div>
                <div className={styles.barsDiv}>
                  <div className={styles.barDiv}>
                    <div className={styles.barDivTopBar}>
                      <h4>{data[4].x}</h4>
                      <h4>{data[4].y}</h4>
                    </div>
                    <ProgressBar
                      isLabelVisible={false}
                      bgcolor="#FFBB78"
                      height="8px"
                      completed={65}
                    />
                    <div className={styles.barDivBottomBar}>
                      <h4>$2750</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={cx(
            styles.salesAdditionalDetails,
            'd-flex justify-content-between'
          )}
        >
          <div className={styles.detailContainer}>
            <div>
              <h3>$ 1,150</h3>
              <p>Total Expanse</p>
            </div>
          </div>
          <div className={styles.detailContainer}>
            <div>
              <h3>$ 800</h3>
              <p>Overall Expanse</p>
            </div>
          </div>
          <div className={styles.detailContainer}>
            <div>
              <h3>$ 1,150</h3>
              <p>Total Given Credit</p>
            </div>
          </div>
          <div className={styles.detailContainer}>
            <div>
              <h3>$ 800</h3>
              <p>Total Credit Received</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesSummary;
