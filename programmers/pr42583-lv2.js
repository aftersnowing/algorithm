function solution(length, weight, truck) {
    const bridge = [];
    let count = 1;
    let limit = 0;
    bridge.push({ time: count, weight: truck.shift() });

    while (bridge.length !== 0 || truck.length !== 0) {
        if (count - bridge[0].time >= length) bridge.shift();
        limit = bridge.reduce((acc, cur) => acc + cur.weight, 0) + truck[0];
        if (limit <= weight && truck.length) bridge.push({ time: count, weight: truck.shift() });
        count++;
    }
    return count - 1
}
// 다리를 지나는 트럭
// 입출력 예
// bridge_length	weight	truck_weights	return
// 2	10	[7,4,5,6]	8
// 100	100	[10]	101
// 100	100	[10,10,10,10,10,10,10,10,10,10]	110

//bridge array를 큐라고 생각하고 while문에서 매 카운팅마다 bridge의 weight limit을 확인하고 if문으로 다리에 트럭을 올릴지 말지 결정해줬다.
//그리고 truck객체에 다리에 올라갈때의 count를 포함시켜서 포함된 count와 매카운팅마다의 count의 차를 length와 비교하여 
//다리길이만큼 시간이 지난 후 truck객체를 bridge array에서 제거해줬다.