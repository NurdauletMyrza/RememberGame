import styles from "../Styles.module.css";

function LeaderboardPage() {
  const usersData = [];
  for (let element in localStorage) {
    const userData = JSON.parse(localStorage.getItem(element));
    if (userData !== null && userData.email !== undefined) {
      usersData.push(userData);
    }
  }
  usersData.sort((data1, data2) => data2.score - data1.score);

  console.log(usersData);

  return (
    <div className={styles.leaderboard}>
      <h2 className={styles.leaderboard__header}>leaderboard</h2>
      <table className={styles.leaderboard__table}>
        <thead></thead>
        <tbody>
          {usersData.map((userData, index) => {

            return (
              <tr className={styles["leaderboard__table-row"]} key={"leaderboard-table-row-"+index}>
                <td className={styles["leaderboard__table-cell"]}>{index + 1}</td>
                <td className={styles["leaderboard__table-cell"]}>{userData.email}</td>
                <td className={styles["leaderboard__table-cell"]}>{userData.score}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}

export default LeaderboardPage;