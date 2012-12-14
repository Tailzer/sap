function calculate(data) { 
data['3a'] = data['1a'] * data['2a'];
data['3b'] = data['1b'] * data['2b'];
data['3c'] = data['1c'] * data['2c'];
data['3d'] = data['1d'] * data['2d'];
data['3e'] = data['1e'] * data['2e'];
data['3f'] = data['1f'] * data['2f'];
data['3g'] = data['1g'] * data['2g'];
data['3h'] = data['1h'] * data['2h'];
data['4'] = data['1a'] + data['1b'] + data['1c'] + data['1d'] + data['1e'] + data['1f'] + data['1g'] + data['1h'];
data['5'] = data['3a'] + data['3b'] + data['3c'] + data['3d'] + data['3e'] + data['3f'] + data['3g'] + data['3h'];
data['6ad'] = data['6aa'] + data['6ab'] + data['6ac'];
data['6a'] = data['6ad'] * 40;
data['6bd'] = data['6ba'] + data['6bb'] + data['6bc'];
data['6b'] = data['6bd'] * 20;
data['7a'] = data['7aa'] * 10;
data['7b'] = data['7ba'] * 10;
data['7c'] = data['7ca'] * 40;
data['8a'] = data['6a'] + data['6b'] + data['7a'] + data['7b'] + data['7c'];
data['8'] = data['8a'] / data['5'];
data['10'] = data['9'] - 1 * 0.1;
data['15'] = -0.2 * data['14'] / 100 + 0.25;
data['16'] = data['8'] + data['10'] + data['11'] + data['12'] + data['13'] + data['15'];
data['18'] = data['16'] * 1;
data['20'] = -0.075 * data['19'] + 1;
data['21'] = data['18'] * data['20'];
for (var i=1; i<13; i++) { data['22a-'+i] = data['22-'+i] / 4; }
for (var i=1; i<13; i++) { data['22b-'+i] = data['22a-'+i] * data['21']; }
for (var i=1; i<13; i++) { data['24a-'+i] = data['23c'] / -100 + 1 * data['23b'] + data['22b-'+i]; }
for (var i=1; i<13; i++) { data['24b-'+i] = data['22b-'+i] + data['23b']; }
data['26'] = data['26-1'] * data['26-2'];
data['27'] = data['27-1'] * data['27-2'];
data['27a'] = data['27a-1'] * data['27a-2'];
data['28'] = data['28-1'] * data['28-2'];
data['28a'] = data['28a-1'] * data['28a-2'];
data['28b'] = data['28b-1'] * data['28b-2'];
data['29-3'] = data['29-1'] - data['29-2'];
data['29a-3'] = data['29a-1'] - data['29a-2'];
data['30-3'] = data['30-1'] - data['30-2'];
data['29'] = data['29-3'] * data['29-4'];
data['29a'] = data['29a-3'] * data['29a-4'];
data['30'] = data['30-3'] * data['30-4'];
data['31'] = data['26-1'] + data['27-1'] + data['27a-1'] + data['28-1'] + data['28a-1'] + data['28b-1'] + data['29-3'] + data['29a-3'] + data['30-3'];
data['32'] = data['32-1'] * data['32-2'];
data['33'] = data['26'] + data['27'] + data['27a'] + data['28'] + data['28a'] + data['28b'] + data['29'] + data['29a'] + data['30'] + data['32'];
data['34'] = data['28-4'] + data['28a-4'] + data['28b-4'] + data['29-6'] + data['29a-6'] + data['30-6'] + data['32-4'] + data['32a-3'] + data['32b-3'] + data['32c-3'] + data['32d-3'] + data['32e-3'];
data['35'] = data['34'] / 4;
data['37'] = data['33'] + data['36'];
for (var i=1; i<13; i++) { data['38-'+i] = 0.33 * data['25-'+i] * 5; }
for (var i=1; i<13; i++) { data['39-'+i] = data['37'] + data['38-'+i]; }
data['39'] = data['39o1'] + data['39o2'] + data['39o3'] + data['39o4'] + data['39o5'] + data['39o6'] + data['39o7'] + data['39o8'] + data['39o9'] + data['39o10'] + data['39o11'] + data['39o12'];
for (var i=1; i<13; i++) { data['40-'+i] = data['39-'+i] / 4; }
data['40'] = data['40o1'] + data['40o2'] + data['40o3'] + data['40o4'] + data['40o5'] + data['40o6'] + data['40o7'] + data['40o8'] + data['40o9'] + data['40o10'] + data['40o11'] + data['40o12'];
data['41'] = data['41o1'] + data['41o2'] + data['41o3'] + data['41o4'] + data['41o5'] + data['41o6'] + data['41o7'] + data['41o8'] + data['41o9'] + data['41o10'] + data['41o11'] + data['41o12'];
data['44'] = data['44o1'] + data['44o2'] + data['44o3'] + data['44o4'] + data['44o5'] + data['44o6'] + data['44o7'] + data['44o8'] + data['44o9'] + data['44o10'] + data['44o11'] + data['44o12'];
data['45'] = data['45o1'] + data['45o2'] + data['45o3'] + data['45o4'] + data['45o5'] + data['45o6'] + data['45o7'] + data['45o8'] + data['45o9'] + data['45o10'] + data['45o11'] + data['45o12'];
for (var i=1; i<13; i++) { data['46-'+i] = 0.15 * data['45-'+i]; }
data['46'] = data['46o1'] + data['46o2'] + data['46o3'] + data['46o4'] + data['46o5'] + data['46o6'] + data['46o7'] + data['46o8'] + data['46o9'] + data['46o10'] + data['46o11'] + data['46o12'];
data['49'] = data['47'] + data['48'];
data['54'] = data['50'] + data['51'] + data['52'] + data['53'];
for (var i=1; i<13; i++) { data['56-'+i] = data['55'] * data['41-'+i]; }
data['56'] = data['56o1'] + data['56o2'] + data['56o3'] + data['56o4'] + data['56o5'] + data['56o6'] + data['56o7'] + data['56o8'] + data['56o9'] + data['56o10'] + data['56o11'] + data['56o12'];
for (var i=1; i<13; i++) { data['57-'+i] = data['50'] - data['H11'] / data['50'] * data['56-'+i]; }
data['57'] = data['57o1'] + data['57o2'] + data['57o3'] + data['57o4'] + data['57o5'] + data['57o6'] + data['57o7'] + data['57o8'] + data['57o9'] + data['57o10'] + data['57o11'] + data['57o12'];
for (var i=1; i<13; i++) { data['59-'+i] = data['58'] / 365 * data['41-'+i]; }
data['59'] = data['59o1'] + data['59o2'] + data['59o3'] + data['59o4'] + data['59o5'] + data['59o6'] + data['59o7'] + data['59o8'] + data['59o9'] + data['59o10'] + data['59o11'] + data['59o12'];
data['61'] = data['61o1'] + data['61o2'] + data['61o3'] + data['61o4'] + data['61o5'] + data['61o6'] + data['61o7'] + data['61o8'] + data['61o9'] + data['61o10'] + data['61o11'] + data['61o12'];
for (var i=1; i<13; i++) { data['62-'+i] = data['45-'+i] + data['46-'+i] + data['57-'+i] + data['59-'+i] + data['61-'+i] * 0.85; }
data['62'] = data['62o1'] + data['62o2'] + data['62o3'] + data['62o4'] + data['62o5'] + data['62o6'] + data['62o7'] + data['62o8'] + data['62o9'] + data['62o10'] + data['62o11'] + data['62o12'];
data['63'] = data['63o1'] + data['63o2'] + data['63o3'] + data['63o4'] + data['63o5'] + data['63o6'] + data['63o7'] + data['63o8'] + data['63o9'] + data['63o10'] + data['63o11'] + data['63o12'];
for (var i=1; i<13; i++) { data['64-'+i] = data['62-'+i] + data['63-'+i]; }
data['64'] = data['64o1'] + data['64o2'] + data['64o3'] + data['64o4'] + data['64o5'] + data['64o6'] + data['64o7'] + data['64o8'] + data['64o9'] + data['64o10'] + data['64o11'] + data['64o12'];
for (var i=1; i<13; i++) { data['65pAo-'+i] = data['61-'+i] + data['45-'+i] * 0.25; }
data['65pA'] = data['65pAo1'] + data['65pAo2'] + data['65pAo3'] + data['65pAo4'] + data['65pAo5'] + data['65pAo6'] + data['65pAo7'] + data['65pAo8'] + data['65pAo9'] + data['65pAo10'] + data['65pAo11'] + data['65pAo12'];
for (var i=1; i<13; i++) { data['65pBo-'+i] = data['59-'+i] + data['57-'+i] + data['46-'+i] * 0.8; }
for (var i=1; i<13; i++) { data['65-'+i] = data['65pBo-'+i] + data['65pAo-'+i]; }
data['65'] = data['65o1'] + data['65o2'] + data['65o3'] + data['65o4'] + data['65o5'] + data['65o6'] + data['65o7'] + data['65o8'] + data['65o9'] + data['65o10'] + data['65o11'] + data['65o12'];
for (var i=1; i<13; i++) { data['73-'+i] = data['66-'+i] + data['67-'+i] + data['68-'+i] + data['69-'+i] + data['70-'+i] + data['71-'+i] + data['72-'+i]; }
for (var i=1; i<13; i++) { data['83-'+i] = data['74-'+i] + data['75-'+i] + data['76-'+i] + data['77-'+i] + data['78-'+i] + data['79-'+i] + data['80-'+i] + data['81-'+i] + data['82-'+i]; }
for (var i=1; i<13; i++) { data['84-'+i] = data['73-'+i] + data['83-'+i]; }
for (var i=1; i<13; i++) { data['95-'+i] = data['94-'+i] * data['84-'+i]; }
for (var i=1; i<13; i++) { data['97-'+i] = data['93-'+i] - data['96-'+i] * data['39-'+i]; }
for (var i=1; i<13; i++) { data['98-'+i] = data['97-'+i] - data['95-'+i] * 0.024 * data['41-'+i] * data['97-'+i]; }
data['98'] = data['98o1'] + data['98o2'] + data['98o3'] + data['98o4'] + data['98o5'] + data['98o6'] + data['98o7'] + data['98o8'] + data['98o9'] + data['98o10'] + data['98o11'] + data['98o12'];
data['99'] = data['98'] / data['4'];
for (var i=1; i<13; i++) { data['102-'+i] = data['100-'+i] * data['101-'+i]; }
data['104'] = data['104o1'] + data['104o2'] + data['104o3'] + data['104o4'] + data['104o5'] + data['104o6'] + data['104o7'] + data['104o8'] + data['104o9'] + data['104o10'] + data['104o11'] + data['104o12'];
data['106'] = data['106o1'] + data['106o2'] + data['106o3'] + data['106o4'] + data['106o5'] + data['106o6'] + data['106o7'] + data['106o8'] + data['106o9'] + data['106o10'] + data['106o11'] + data['106o12'];
for (var i=1; i<13; i++) { data['107-'+i] = data['104-'+i] * data['105'] * data['106-'+i]; }
data['107'] = data['107o1'] + data['107o2'] + data['107o3'] + data['107o4'] + data['107o5'] + data['107o6'] + data['107o7'] + data['107o8'] + data['107o9'] + data['107o10'] + data['107o11'] + data['107o12'];
data['108'] = data['107'] / data['4'];
data['109'] = data['99'] + data['108'];
data['202'] = data['201'] - 1;
data['204'] = data['203'] - 1 * data['202'];
data['205'] = data['202'] * data['203'];
for (var i=1; i<13; i++) { data['211-'+i] = data['98-'+i] * data['204'] * 100 / data['206']; }
data['211'] = data['211o1'] + data['211o2'] + data['211o3'] + data['211o4'] + data['211o5'] + data['211o6'] + data['211o7'] + data['211o8'] + data['211o9'] + data['211o10'] + data['211o11'] + data['211o12'];
for (var i=1; i<13; i++) { data['213-'+i] = data['98-'+i] * data['205'] * 100 / data['207']; }
data['213'] = data['213o1'] + data['213o2'] + data['213o3'] + data['213o4'] + data['213o5'] + data['213o6'] + data['213o7'] + data['213o8'] + data['213o9'] + data['213o10'] + data['213o11'] + data['213o12'];
for (var i=1; i<13; i++) { data['215-'+i] = data['98-'+i] * data['201'] * 100 / data['208']; }
data['215'] = data['215o1'] + data['215o2'] + data['215o3'] + data['215o4'] + data['215o5'] + data['215o6'] + data['215o7'] + data['215o8'] + data['215o9'] + data['215o10'] + data['215o11'] + data['215o12'];
data['217'] = data['64o1'] + data['64o2'] + data['64o3'] + data['64o4'] + data['64o5'] + data['64o6'] + data['64o7'] + data['64o8'] + data['64o9'] + data['64o10'] + data['64o11'] + data['64o12'];
data['217'] = data['217o1'] + data['217o2'] + data['217o3'] + data['217o4'] + data['217o5'] + data['217o6'] + data['217o7'] + data['217o8'] + data['217o9'] + data['217o10'] + data['217o11'] + data['217o12'];
for (var i=1; i<13; i++) { data['219-'+i] = data['64-'+i] * 100 / data['217-'+i]; }
data['219'] = data['219o1'] + data['219o2'] + data['219o3'] + data['219o4'] + data['219o5'] + data['219o6'] + data['219o7'] + data['219o8'] + data['219o9'] + data['219o10'] + data['219o11'] + data['219o12'];
for (var i=1; i<13; i++) { data['221-'+i] = data['107-'+i] * 100 / data['209']; }
data['221'] = data['221o1'] + data['221o2'] + data['221o3'] + data['221o4'] + data['221o5'] + data['221o6'] + data['221o7'] + data['221o8'] + data['221o9'] + data['221o10'] + data['221o11'] + data['221o12'];
data['231'] = data['230a'] + data['230b'] + data['230c'] + data['230d'] + data['230e'] + data['230f'] + data['230g'];
data['255'] = data['240'] + data['241'] + data['242'] + data['243'] + data['244'] + data['245'] + data['246'] + data['247'] + data['248'] + data['249'] + data['250'] + data['251'];
return data; 
}