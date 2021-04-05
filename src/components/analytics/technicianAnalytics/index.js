import React from 'react';
import cx from 'classnames';
import styles from '../../../css/analytics/technicianAnalytics.module.scss';
import userImg from '../../../assets/images/UserIcon.png';

function Index() {
  return (
    <div className={cx(styles.technicianAnalytics)}>
      <div className={styles.technicianAnalyticsHeader}>
        <h4>Technician Analytics</h4>
        <div>
          <input type="text" placeholder="Search Name" />
        </div>
      </div>
      <div className={cx(styles.technicianAnalyticsSubHeader)}>
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
      <div className={styles.technicianAnalyticsDetails}>
        <div className={'container-fluid'}>
          <div className={'row '}>
            <div className={'col-sm-12 col-md-6 tableOverflow '}>
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
                    <th scope="col">Status</th>
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
                    <td>In Progress</td>
                  </tr>
                  <tr>
                    <td>4128</td>
                    <td>Jacob</td>
                    <td>Samsung</td>
                    <td>Samsung</td>
                    <td>50</td>
                    <td>45 $</td>
                    <td>10/02/1986</td>
                    <td>In Progress</td>
                  </tr>
                  <tr>
                    <td>4128</td>
                    <td>Jacob</td>
                    <td>Samsung</td>
                    <td>Samsung</td>
                    <td>50</td>
                    <td>45 $</td>
                    <td>10/02/1986</td>
                    <td>In Progress</td>
                  </tr>
                  <tr>
                    <td>4128</td>
                    <td>Jacob</td>
                    <td>Samsung</td>
                    <td>Samsung</td>
                    <td>50</td>
                    <td>45 $</td>
                    <td>10/02/1986</td>
                    <td>Completed</td>
                  </tr>
                  <tr>
                    <td>4128</td>
                    <td>Jacob</td>
                    <td>Samsung</td>
                    <td>Samsung</td>
                    <td>50</td>
                    <td>45 $</td>
                    <td>10/02/1986</td>
                    <td>Completed</td>
                  </tr>
                  <tr>
                    <td>4128</td>
                    <td>Jacob</td>
                    <td>Samsung</td>
                    <td>Samsung</td>
                    <td>50</td>
                    <td>45 $</td>
                    <td>10/02/1986</td>
                    <td>Completed</td>
                  </tr>
                  <tr>
                    <td>4128</td>
                    <td>Jacob</td>
                    <td>Samsung</td>
                    <td>Samsung</td>
                    <td>50</td>
                    <td>45 $</td>
                    <td>10/02/1986</td>
                    <td>In Progress</td>
                  </tr>
                  <tr>
                    <td>4128</td>
                    <td>Jacob</td>
                    <td>Samsung</td>
                    <td>Samsung</td>
                    <td>50</td>
                    <td>45 $</td>
                    <td>10/02/1986</td>
                    <td>In Progress</td>
                  </tr>
                  <tr>
                    <td>4128</td>
                    <td>Jacob</td>
                    <td>Samsung</td>
                    <td>Samsung</td>
                    <td>50</td>
                    <td>45 $</td>
                    <td>10/02/1986</td>
                    <td>In Progress</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={'col-sm-12 col-md-6  tableOverflow'}>
              <div className={styles.technicianContainers}>
                <div className={styles.technicianContainerGalla}>
                  <h2>$125.00 </h2>
                  <p>Galla</p>
                </div>
                <div className={styles.technicianContainersWrappers}>
                  <div className={styles.technicianContainer}>
                    <h2>125</h2>
                    <p>Total Repairs</p>
                  </div>
                  <div className={styles.technicianContainer}>
                    <h2>$ 2,125</h2>
                    <p>Total Price</p>
                  </div>
                  <div className={styles.technicianContainer}>
                    <h2>125</h2>
                    <p>Gurantee</p>
                  </div>
                  <div className={styles.technicianContainer}>
                    <h2>$ 2,125</h2>
                    <p>Gurantee Price</p>
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
