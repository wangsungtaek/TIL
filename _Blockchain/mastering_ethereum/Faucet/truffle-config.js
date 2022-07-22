module.exports = {
	networks: {
		localnode: { // 로컬 노드가 연결되는 네트워크
			network_id: "*", // 모든 네트워크 ID와 일치
			host: "localhost",
			port: 8545,
			gas: 4700000,
			gasPrice: 100000000000,
		}
	}
};