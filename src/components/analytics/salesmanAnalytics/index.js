import React from 'react';
import cx from 'classnames';
import styles from '../../../css/analytics/salesmanAnalytics.module.scss';
import userImg from '../../../assets/images/UserIcon.png';
import ProgressBar from '@ramonak/react-progress-bar';

function Index() {
  let data = [
    {x: 'Repair', y: 85},
    {x: 'Recharge', y: 130},
    {x: 'Mobiles', y: 25},
    {x: 'Sim Card', y: 12},
    {x: 'Accessories', y: 140},
  ];
  return (
    <div className={cx(styles.salesmanAnalytics)}>
      <div className={styles.salesmanAnalyticsHeader}>
        <h4>Salesman Analytics</h4>
        <div>
          <button>OverAll</button>
          <button>Today</button>
        </div>
      </div>
      <div className={cx(styles.salesmanAnalyticsSubHeader)}>
        <div className={styles.technicianTitle}>
          <div className={styles.divOne}>
            <img
              src={userImg}
              className={styles.userImg}
              alt="User Profile Img"
            ></img>
          </div>
          <div className={styles.divTwo}>
            <h4>Technician Name</h4>
            <p>Shop A</p>
          </div>
        </div>
        <div className={styles.technicianDetails}>
          <h4>
            Total Profit: <span>$ 2,3150</span>
          </h4>
        </div>
      </div>
      <div className={styles.salesAnalyticsDetails}>
        <div className={'container-fluid'}>
          <div className={'row '}>
            <div className={'col-md-4 col-lg-6 tableOverflow '}>
              <table className={cx('table table-borderless borderless')}>
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Item</th>
                    <th scope="col">Model</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>4128</td>
                    <td>Jacob</td>
                    <td>Samsung</td>
                    <td>Samsung</td>
                    <td>50</td>
                    <td>45 $</td>
                    <td>10/02/1986</td>
                  </tr>
                  <tr>
                    <td>4128</td>
                    <td>Jacob</td>
                    <td>Samsung</td>
                    <td>Samsung</td>
                    <td>50</td>
                    <td>45 $</td>
                    <td>10/02/1986</td>
                  </tr>
                  <tr>
                    <td>4128</td>
                    <td>Jacob</td>
                    <td>Samsung</td>
                    <td>Samsung</td>
                    <td>50</td>
                    <td>45 $</td>
                    <td>10/02/1986</td>
                  </tr>
                  <tr>
                    <td>4128</td>
                    <td>Jacob</td>
                    <td>Samsung</td>
                    <td>Samsung</td>
                    <td>50</td>
                    <td>45 $</td>
                    <td>10/02/1986</td>
                  </tr>
                  <tr>
                    <td>4128</td>
                    <td>Jacob</td>
                    <td>Samsung</td>
                    <td>Samsung</td>
                    <td>50</td>
                    <td>45 $</td>
                    <td>10/02/1986</td>
                  </tr>
                  <tr>
                    <td>4128</td>
                    <td>Jacob</td>
                    <td>Samsung</td>
                    <td>Samsung</td>
                    <td>50</td>
                    <td>45 $</td>
                    <td>10/02/1986</td>
                  </tr>
                  <tr>
                    <td>4128</td>
                    <td>Jacob</td>
                    <td>Samsung</td>
                    <td>Samsung</td>
                    <td>50</td>
                    <td>45 $</td>
                    <td>10/02/1986</td>
                  </tr>
                  <tr>
                    <td>4128</td>
                    <td>Jacob</td>
                    <td>Samsung</td>
                    <td>Samsung</td>
                    <td>50</td>
                    <td>45 $</td>
                    <td>10/02/1986</td>
                  </tr>
                  <tr>
                    <td>4128</td>
                    <td>Jacob</td>
                    <td>Samsung</td>
                    <td>Samsung</td>
                    <td>50</td>
                    <td>45 $</td>
                    <td>10/02/1986</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={'col-md-8 col-lg-6 tableOverflow '}>
              <div className={'row'}>
                <div className={cx(styles.salesTxt, 'col-sm-12 col-md-6')}>
                  <div className={styles.totalSalesContainer}>
                    <div className={styles.divOne}>
                      <h2>$ 1,150.00</h2>
                      <p>Total Sales</p>
                    </div>
                    <div className={styles.divTwo}>
                      <div>
                        <h4>Cash</h4>
                        <p>$254.00</p>
                      </div>
                      <div>
                        <h4>Cash</h4>
                        <p>$254.00</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.creditContainer}>
                    <div className={styles.creditGiven}>
                      <h4>$252.00</h4>
                      <p>Credit Given</p>
                    </div>
                    <div className={styles.creditReceived}>
                      <h4>$252.00</h4>
                      <p>Credit Received</p>
                    </div>
                  </div>
                </div>
                <div className={cx(styles.salesBar, 'col-sm-12 col-md-6')}>
                  <div className={styles.bars}>
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
                    </div>
                    <div className={styles.barDiv}>
                      <div className={styles.barDivTopBar}>
                        <h4>{data[1].x}</h4>
                        <h4>{data[1].y}</h4>
                      </div>
                      <ProgressBar
                        width="100%"
                        isLabelVisible={false}
                        completed={64}
                        height="8px"
                        bgcolor="#AEC7E8"
                      />
                    </div>
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
                    </div>
                    <div className={styles.barDiv}>
                      <div className={styles.barDivTopBar}>
                        <h4>{data[3].x}</h4>
                        <h4>{data[3].y}</h4>
                      </div>
                      <ProgressBar
                        width="100%"
                        isLabelVisible={false}
                        completed={64}
                        height="8px"
                        bgcolor="#FFBB78"
                      />
                    </div>
                    <div className={styles.barDiv}>
                      <div className={styles.barDivTopBar}>
                        <h4>{data[4].x}</h4>
                        <h4>{data[4].y}</h4>
                      </div>
                      <ProgressBar
                        width="100%"
                        isLabelVisible={false}
                        completed={64}
                        height="8px"
                        bgcolor="#2CA02C"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
