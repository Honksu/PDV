// script file for crosshair to the graph, not working at the moment


// renders x and y crosshair
const focus = svg
    .append('g')
    .attr('class', 'focus')
    .style('display', 'none');

focus.append('circle').attr('r', 4.5);
focus.append('line').classed('x', true);
focus.append('line').classed('y', true);

svg
    .append('rect')
    .attr('class', 'overlay')
    .attr('width', width)
    .attr('height', height)
    .on('mouseover', () => focus.style('display', null))
    .on('mouseout', () => focus.style('display', 'none'))
    .on('mousemove', generateCrosshair);

d3.select('.overlay').style('fill', 'none');
d3.select('.overlay').style('pointer-events', 'all');

d3.selectAll('.focus line').style('fill', 'none');
d3.selectAll('.focus line').style('stroke', '#67809f');
d3.selectAll('.focus line').style('stroke-width', '1.5px');
d3.selectAll('.focus line').style('stroke-dasharray', '3 3');

// Used to generate the crosshair
function generateCrosshair() {
    //returns corresponding value from the domain
    const correspondingDate = xScale.invert(d3.mouse(this)[0]);
    //gets insertion point
    const i = bisectDate(data, correspondingDate, 1);
    const d0 = data[i - 1];
    const d1 = data[i];
    const currentPoint = correspondingDate - d0['date'] > d1['date'] - correspondingDate ? d1 : d0;

    focus.attr('transform', `translate(${xScale(currentPoint['date'])}, ${yScale(currentPoint['close'])})`);

    focus
        .select('line.x')
        .attr('x1', 0)
        .attr('x2', width - xScale(currentPoint['date']))
        .attr('y1', 0)
        .attr('y2', 0);

    focus
        .select('line.y')
        .attr('x1', 0)
        .attr('x2', 0)
        .attr('y1', 0)
        .attr('y2', height - yScale(currentPoint['close']));

    updateLegends(currentPoint);
}
// Function to update the legend information based on crosshair movement
const updateLegends = currentData => {
    d3.selectAll('.lineLegend').remove();

    const legendKeys = Object.keys(data[0]);
    const lineLegend = svg
        .selectAll('.lineLegend')
        .data(legendKeys)
        .enter()
        .append('g')
        .attr('class', 'lineLegend')
        .attr('transform', (d, i) => {
            return `translate(0, ${i * 20})`;
        });
    lineLegend
        .append('text')
        .text(d => {
            if (d === 'month') {
                return `${d}: ${currentData[d].toLocaleDateString()}`;
            } else if (d === 'count_items') {
                return `${d}: ${currentData[d].toFixed(2)}`;
            } else {
                return `${d}: ${currentData[d]}`;
            }
        })
        .style('fill', 'white')
        .attr('transform', 'translate(15,9)');
};