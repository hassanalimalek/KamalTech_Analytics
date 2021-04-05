import React from 'react';
import cx from 'classnames';
import styles from '../../../css/analytics/salesAnalytics.module.scss';

function Index() {
  return (
    <div className={cx(styles.salesAnalytics)}>
      <div className={styles.salesAnalyticsHeader}>
        <h4>Sales Analytics</h4>
        <div>
          <button>OverAll</button>
          <button>Today</button>
        </div>
      </div>
      <div className={cx(styles.salesAnalyticsSubHeader)}>
        <div className={styles.shopTitle}>
          <h4>Shop Name</h4>
          <p>Shop Location</p>
        </div>
        <div className={styles.shopDetails}>
          <h4>
            Total Profit: <span>$ 2,3150</span>
          </h4>
          <button>View All</button>
        </div>
      </div>
      <div className={styles.salesAnalyticsDetails}>
        <div className={'container-fluid'}>
          <div className={'row '}>
            <div className={'col-md-4 col-lg-8 tableOverflow '}>
              <table
                className={cx(
                  'table table-borderless borderless tableOverflow'
                )}
              >
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
            <div className={'col-md-8 col-lg-4 tableOverflow'}>
              <div className={styles.analyticsContainers}>
                <div className={styles.analyticsContainer}>
                  <h4>$7.5 K</h4>
                  <p>Profit</p>
                </div>
                <div className={styles.analyticsContainer}>
                  <h4>$7.5 K</h4>
                  <p>Profit</p>
                </div>
                <div className={styles.analyticsContainer}>
                  <h4>$7.5 K</h4>
                  <p>Profit</p>
                </div>
                <div className={styles.analyticsContainer}>
                  <h4>$7.5 K</h4>
                  <p>Profit</p>
                </div>
                <div className={styles.analyticsContainer}>
                  <h4>$7.5 K</h4>
                  <p>Profit</p>
                </div>
                <div className={styles.analyticsContainer}>
                  <h4>$7.5 K</h4>
                  <p>Profit</p>
                </div>
                <div className={styles.analyticsContainer}>
                  <h4>$7.5 K</h4>
                  <p>Profit</p>
                </div>
                <div className={styles.analyticsContainer}>
                  <h4>$7.5 K</h4>
                  <p>Profit</p>
                </div>
                <div className={styles.analyticsContainer}>
                  <h4>$7.5 K</h4>
                  <p>Profit</p>
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
