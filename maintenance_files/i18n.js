
/* gettext library */

var catalog = new Array();

function pluralidx(n) {
  var v=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);
  if (typeof(v) == 'boolean') {
    return v ? 1 : 0;
  } else {
    return v;
  }
}
catalog['%d day'] = ['','','',''];
catalog['%d month'] = ['','','',''];
catalog['%(num_students)s student'] = ['','','',''];
catalog['%(num_students)s student opened Subsection'] = ['','','',''];
catalog['%d minute'] = ['','','',''];
catalog['%d year'] = ['','','',''];
catalog['%(num_questions)s question'] = ['','','',''];
catalog['about %d hour'] = ['','','',''];
catalog['"optional title"'] = '"\u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"';
catalog['%(num_questions)s question'][0] = '%(num_questions)s \u0432\u043e\u043f\u0440\u043e\u0441';
catalog['%(num_questions)s question'][1] = '%(num_questions)s \u0432\u043e\u043f\u0440\u043e\u0441\u0430';
catalog['%(num_questions)s question'][2] = '%(num_questions)s \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432';
catalog['%(num_questions)s question'][3] = '%(num_questions)s \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432';
catalog['%(num_students)s student opened Subsection'][0] = '%(num_students)s \u0441\u0442\u0443\u0434\u0435\u043d\u0442 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u043b \u043f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b';
catalog['%(num_students)s student opened Subsection'][1] = '%(num_students)s \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u043b\u0438 \u043f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b';
catalog['%(num_students)s student opened Subsection'][2] = '%(num_students)s \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u043b\u0438 \u043f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b';
catalog['%(num_students)s student opened Subsection'][3] = '%(num_students)s \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u043b\u0438 \u043f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b';
catalog['%(num_students)s student'][0] = '%(num_students)s \u0441\u0442\u0443\u0434\u0435\u043d\u0442';
catalog['%(num_students)s student'][1] = '%(num_students)s \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430';
catalog['%(num_students)s student'][2] = '%(num_students)s \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432';
catalog['%(num_students)s student'][3] = '%(num_students)s \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432';
catalog['%d day'][0] = '%d \u0434\u0435\u043d\u044c';
catalog['%d day'][1] = '%d \u0434\u043d\u044f';
catalog['%d day'][2] = '%d \u0434\u043d\u0435\u0439';
catalog['%d day'][3] = '%d \u0434\u043d\u0435\u0439';
catalog['%d minute'][0] = '%d \u043c\u0438\u043d\u0443\u0442\u0430';
catalog['%d minute'][1] = '%d \u043c\u0438\u043d\u0443\u0442\u044b';
catalog['%d minute'][2] = '%d \u043c\u0438\u043d\u0443\u0442';
catalog['%d minute'][3] = '%d \u043c\u0438\u043d\u0443\u0442';
catalog['%d month'][0] = '%d \u043c\u0435\u0441\u044f\u0446';
catalog['%d month'][1] = '%d \u043c\u0435\u0441\u044f\u0446\u0430';
catalog['%d month'][2] = '%d \u043c\u0435\u0441\u044f\u0446\u0435\u0432';
catalog['%d month'][3] = '%d \u043c\u0435\u0441\u044f\u0446\u0435\u0432';
catalog['%d year'][0] = '%d \u0433\u043e\u0434';
catalog['%d year'][1] = '%d \u0433\u043e\u0434\u0430';
catalog['%d year'][2] = '%d \u043b\u0435\u0442';
catalog['%d year'][3] = '%d \u043b\u0435\u0442';
catalog['Abbreviation'] = '\u0410\u0431\u0431\u0440\u0435\u0432\u0438\u0430\u0442\u0443\u0440\u0430';
catalog['Add URLs for additional versions'] = '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u0435\u0440\u0441\u0438\u0438';
catalog['Add a Chapter'] = '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0433\u043b\u0430\u0432\u0443';
catalog['Add'] = '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c';
catalog['Align center'] = '\u041f\u043e \u0446\u0435\u043d\u0442\u0440\u0443';
catalog['Align left'] = '\u041f\u043e \u043b\u0435\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e';
catalog['Align right'] = '\u041f\u043e \u043f\u0440\u0430\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e';
catalog['Alignment'] = '\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435';
catalog['An error has occurred. Please try again.'] = '\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430.  \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.';
catalog['An error has occurred. Refresh the page, and then try again.'] = '\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.';
catalog['Answer hidden'] = '\u041e\u0442\u0432\u0435\u0442 \u0441\u043a\u0440\u044b\u0442';
catalog['Answer:'] = '\u041e\u0442\u0432\u0435\u0442:';
catalog['Background color'] = '\u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430';
catalog['Blockquote (Ctrl+Q)'] = '\u0426\u0438\u0442\u0430\u0442\u0430 (Ctrl+Q)';
catalog['Bold (Ctrl+B)'] = '\u0416\u0438\u0440\u043d\u044b\u0439 (Ctrl+B)';
catalog['Bold'] = '\u041f\u043e\u043b\u0443\u0436\u0438\u0440\u043d\u044b\u0439';
catalog['Border color'] = '\u0426\u0432\u0435\u0442 \u0433\u0440\u0430\u043d\u0438\u0446\u044b';
catalog['Border'] = '\u0413\u0440\u0430\u043d\u0438\u0446\u0430';
catalog['Bulleted List (Ctrl+U)'] = '\u041c\u0430\u0440\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a (Ctrl+U)';
catalog['Cancel'] = '\u041e\u0442\u043c\u0435\u043d\u0430';
catalog['Caption will be displayed when '] = '\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f, \u043a\u043e\u0433\u0434\u0430';
catalog['Clear Release Date/Time'] = '\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0434\u0430\u0442\u0443/\u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u0443\u0441\u043a\u0430';
catalog['Close'] = '\u0417\u0430\u043a\u0440\u044b\u0442\u044c';
catalog['Color'] = '\u0426\u0432\u0435\u0442';
catalog['Common Problem Types'] = '\u0427\u0430\u0441\u0442\u043e \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u044e\u0449\u0438\u0435\u0441\u044f \u0442\u0438\u043f\u044b \u0437\u0430\u0434\u0430\u043d\u0438\u0439';
catalog['Copy'] = '\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c';
catalog['Could not submit order'] = '\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437';
catalog['Cut'] = '\u0412\u044b\u0440\u0435\u0437\u0430\u0442\u044c';
catalog['Date posted'] = '\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438';
catalog['Decrease indent'] = '\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043e\u0442\u0441\u0442\u0443\u043f';
catalog['Default'] = '\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e';
catalog['Delete column'] = '\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446';
catalog['Delete table'] = '\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443';
catalog['Delete'] = '\u0423\u0434\u0430\u043b\u0438\u0442\u044c';
catalog['Document properties'] = '\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430';
catalog['Edit HTML'] = '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c HTML';
catalog['Encoding'] = '\u041a\u043e\u0434\u0438\u0440\u043e\u0432\u043a\u0430';
catalog['Error fetching grade distributions.'] = '\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043e\u0446\u0435\u043d\u043e\u043a.';
catalog['Error'] = '\u041e\u0448\u0438\u0431\u043a\u0430';
catalog['Error.'] = '\u041e\u0448\u0438\u0431\u043a\u0430.';
catalog['Failed to rescore problem.'] = '\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u0446\u0435\u043d\u043a\u0443 \u0437\u0430 \u0437\u0430\u0434\u0430\u043d\u0438\u0435.';
catalog['Failed to reset attempts.'] = '\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u043f\u043e\u043f\u044b\u0442\u043a\u0438.';
catalog['File'] = '\u0424\u0430\u0439\u043b';
catalog['Find and replace'] = '\u041d\u0430\u0439\u0442\u0438 \u0438 \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c';
catalog['Find'] = '\u041d\u0430\u0439\u0442\u0438';
catalog['HD off'] = 'HD \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043e';
catalog['HD on'] = 'HD \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e';
catalog['HTML source code'] = '\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 HTML';
catalog['Heading (Ctrl+H)'] = '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a (Ctrl+H)';
catalog['Height'] = '\u0412\u044b\u0441\u043e\u0442\u0430';
catalog['Hide Answer'] = '\u0421\u043a\u0440\u044b\u0442\u044c \u041e\u0442\u0432\u0435\u0442';
catalog['Hide Discussion'] = '\u0421\u043a\u0440\u044b\u0442\u044c \u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u044f';
catalog['Hide Question'] = '\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441';
catalog['Horizontal Rule (Ctrl+R)'] = '\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u043b\u0438\u043d\u0438\u044f (Ctrl+R)';
catalog['Horizontal line'] = '\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u043b\u0438\u043d\u0438\u044f';
catalog['Hyperlink (Ctrl+L)'] = '\u0413\u0438\u043f\u0435\u0440\u0441\u0441\u044b\u043b\u043a\u0430 (Ctrl+L)';
catalog['Image (Ctrl+G)'] = '\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 (Ctrl+G)';
catalog['Insert date/time'] = '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u0442\u0443/\u0432\u0440\u0435\u043c\u044f';
catalog['Insert link'] = '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443';
catalog['Insert table'] = '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443';
catalog['Insert template'] = '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d';
catalog['Insert video'] = '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0432\u0438\u0434\u0435\u043e';
catalog['Insert'] = '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c';
catalog['Insert/edit image'] = '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c/\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435';
catalog['Insert/edit link'] = '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c/\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443';
catalog['Insert/edit video'] = '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c/\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0438\u0434\u0435\u043e';
catalog['Italic (Ctrl+I)'] = '\u041a\u0443\u0440\u0441\u0438\u0432 (Ctrl+I)';
catalog['Italic'] = '\u041a\u0443\u0440\u0441\u0438\u0432';
catalog['Justify'] = '\u0412\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u043f\u043e \u0448\u0438\u0440\u0438\u043d\u0435';
catalog['Keywords'] = '\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430';
catalog['Left to right'] = '\u0421\u043b\u0435\u0432\u0430 \u043d\u0430\u043f\u0440\u0430\u0432\u043e';
catalog['Link'] = '\u041f\u0440\u0438\u0432\u044f\u0437\u0430\u0442\u044c \u043a \u0443\u0447\u0451\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438';
catalog['List of uploaded files and assets in this course'] = '\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 \u0438 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u043a\u0443\u0440\u0441\u0430';
catalog['Markdown Editing Help'] = 'Markdown: \u041f\u043e\u043c\u043e\u0449\u044c \u0432 \u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438';
catalog['Merge cells'] = '\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u044f\u0447\u0435\u0439\u043a\u0438';
catalog['My Notes'] = '\u041c\u043e\u0438 \u0437\u0430\u043c\u0435\u0442\u043a\u0438';
catalog['Name'] = '\u0418\u043c\u044f';
catalog['New document'] = '\u041d\u043e\u0432\u044b\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442';
catalog['New window'] = '\u041d\u043e\u0432\u043e\u0435 \u043e\u043a\u043d\u043e';
catalog['Number of Droppable'] = '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0442\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u0435\u043c\u044b\u0445';
catalog['Number of Students'] = '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0421\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432';
catalog['Numbered List (Ctrl+O)'] = '\u041d\u0443\u043c\u0435\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a (Ctrl+O)';
catalog['Numbered list'] = '\u041d\u0443\u043c\u0435\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a';
catalog['OK'] = '\u041e\u041a';
catalog['Ok'] = '\u041e\u043a';
catalog['Paste'] = '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c';
catalog['Pause'] = '\u041f\u0430\u0443\u0437\u0430';
catalog['Play'] = '\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438';
catalog['Redo (Ctrl+Shift+Z)'] = '\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c (Ctrl+Shift+Z)';
catalog['Redo (Ctrl+Y)'] = '\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c (Ctrl+Y)';
catalog['Removal is in progress. To avoid errors, stay on this page until the process is complete.'] = '\u0418\u0434\u0451\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435. \u0427\u0442\u043e\u0431\u044b \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043e\u043a, \u043d\u0435 \u0437\u0430\u043a\u0440\u044b\u0432\u0430\u0439\u0442\u0435 \u044d\u0442\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0434\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f.';
catalog['Replace all'] = '\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u0441\u0435';
catalog['Right to left'] = '\u0421\u043f\u0440\u0430\u0432\u0430 \u043d\u0430\u043b\u0435\u0432\u043e';
catalog['Row properties'] = '\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0441\u0442\u0440\u043e\u043a\u0438';
catalog['Row'] = '\u0421\u0442\u0440\u043e\u043a\u0430';
catalog['Rows'] = '\u0421\u0442\u0440\u043e\u043a\u0438';
catalog['Save'] = '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c';
catalog['Saving'] = '\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435';
catalog['Select all'] = '\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435';
catalog['Show Answer'] = '\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0442\u0432\u0435\u0442';
catalog['Show Question'] = '\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0412\u043e\u043f\u0440\u043e\u0441';
catalog['Source code'] = '\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434';
catalog['Spellcheck'] = '\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043e\u0440\u0444\u043e\u0433\u0440\u0430\u0444\u0438\u0438';
catalog['Start search'] = '\u041d\u0430\u0447\u0430\u0442\u044c \u043f\u043e\u0438\u0441\u043a';
catalog['Status: unsubmitted'] = '\u0421\u0442\u0430\u0442\u0443\u0441: \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e';
catalog['Student Visibility'] = '\u0412\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0434\u043b\u044f \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432';
catalog['Successfully deleted student state for user {user}'] = '\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430 \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f {user} \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e';
catalog['Successfully reset the attempts for user {user}'] = '\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u0431\u0440\u043e\u0448\u0435\u043d\u044b \u043f\u043e\u043f\u044b\u0442\u043a\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: {user}';
catalog['Table properties'] = '\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b';
catalog['Table'] = '\u0422\u0430\u0431\u043b\u0438\u0446\u0430';
catalog['Task Status'] = '\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430';
catalog['Text color'] = '\u0426\u0432\u0435\u0442 \u0442\u0435\u043a\u0441\u0442\u0430';
catalog['Text to display'] = '\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u044b\u0439 \u0442\u0435\u043a\u0441\u0442';
catalog['Text'] = '\u0422\u0435\u043a\u0441\u0442';
catalog['The file must be at least {size} in size.'] = '\u0420\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 {size}.';
catalog['The file must be smaller than {size} in size.'] = '\u0420\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c {size}.';
catalog['There is invalid code in your content. Please check to make sure it is valid HTML.'] = '\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043a\u043e\u0434 \u0432 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c \u0432 \u0432\u0435\u0440\u043d\u043e\u0441\u0442\u0438 HTML-\u043a\u043e\u0434\u0430.';
catalog['These users were not affiliated with the course so could not be unenrolled:'] = '\u042d\u0442\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043d\u0435 \u0431\u044b\u043b\u0438 \u0441\u0432\u044f\u0437\u0430\u043d\u044b \u0441 \u0434\u0430\u043d\u043d\u044b\u043c \u043a\u0443\u0440\u0441\u043e\u043c \u0438 \u043d\u0435 \u043c\u043e\u0433\u043b\u0438 \u0431\u044b\u0442\u044c \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445:';
catalog['This may be happening because of an error with our server or your internet connection. Try refreshing the page or making sure you are online.'] = '\u0422\u0430\u043a\u043e\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043b\u0443\u0447\u0430\u0442\u044c\u0441\u044f \u0438\u0437-\u0437\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441 \u043d\u0430\u0448\u0438\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c \u0438\u043b\u0438 \u0432\u0430\u0448\u0438\u043c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u043a \u0421\u0435\u0442\u0438. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0438\u043b\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435.';
catalog['Title'] = '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a';
catalog['Turn off captions'] = '\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044b';
catalog['Turn on captions'] = '\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044b';
catalog['Unable to retrieve data, please try again later.'] = '\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435.  \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u043f\u043e\u0437\u0436\u0435.';
catalog['Undo (Ctrl+Z)'] = '\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c (Ctrl+Z)';
catalog['Unlink'] = '\u0421\u043d\u044f\u0442\u044c \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0443 \u043a \u0443\u0447\u0451\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438';
catalog['Upload File'] = '\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b';
catalog['Upload is in progress. To avoid errors, stay on this page until the process is complete.'] = '\u0418\u0434\u0451\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430. \u0427\u0442\u043e\u0431\u044b \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043e\u043a, \u043d\u0435 \u0437\u0430\u043a\u0440\u044b\u0432\u0430\u0439\u0442\u0435 \u044d\u0442\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0434\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438.';
catalog['Url'] = 'URL';
catalog['Verified Certificate upgrade'] = '\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043d\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430';
catalog['Verified Certificate'] = '\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043d\u043d\u044b\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442';
catalog['Width'] = '\u0428\u0438\u0440\u0438\u043d\u0430';
catalog['Your browser doesn\'t support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.'] = '\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043f\u0440\u044f\u043c\u043e\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0431\u0443\u0444\u0435\u0440\u0443 \u043e\u0431\u043c\u0435\u043d\u0430. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0432\u0438\u0448 Ctrl+X/C/V.';
catalog['Your upload of \'{file}\' failed.'] = '\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \'{file}\'';
catalog['Your upload of \'{file}\' succeeded.'] = '\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \'{file}\' \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430';
catalog['a day'] = '\u043e\u0434\u0438\u043d \u0434\u0435\u043d\u044c';
catalog['about %d hour'][0] = '\u043e\u043a\u043e\u043b\u043e %d \u0447\u0430\u0441\u0430';
catalog['about %d hour'][1] = '\u043e\u043a\u043e\u043b\u043e %d \u0447\u0430\u0441\u043e\u0432';
catalog['about %d hour'][2] = '\u043e\u043a\u043e\u043b\u043e %d \u0447\u0430\u0441\u043e\u0432';
catalog['about %d hour'][3] = '\u043e\u043a\u043e\u043b\u043e %d \u0447\u0430\u0441\u043e\u0432';
catalog['about a minute'] = '\u043e\u043a\u043e\u043b\u043e \u043c\u0438\u043d\u0443\u0442\u044b';
catalog['about a month'] = '\u043e\u043a\u043e\u043b\u043e \u043c\u0435\u0441\u044f\u0446\u0430';
catalog['about a year'] = '\u043e\u043a\u043e\u043b\u043e \u0433\u043e\u0434\u0430';
catalog['about an hour'] = '\u043e\u043a\u043e\u043b\u043e \u0447\u0430\u0441\u0430';
catalog['less than a minute'] = '\u043c\u0435\u043d\u044c\u0448\u0435 \u043c\u0438\u043d\u0443\u0442\u044b';


function gettext(msgid) {
  var value = catalog[msgid];
  if (typeof(value) == 'undefined') {
    return msgid;
  } else {
    return (typeof(value) == 'string') ? value : value[0];
  }
}

function ngettext(singular, plural, count) {
  value = catalog[singular];
  if (typeof(value) == 'undefined') {
    return (count == 1) ? singular : plural;
  } else {
    return value[pluralidx(count)];
  }
}

function gettext_noop(msgid) { return msgid; }

function pgettext(context, msgid) {
  var value = gettext(context + '' + msgid);
  if (value.indexOf('') != -1) {
    value = msgid;
  }
  return value;
}

function npgettext(context, singular, plural, count) {
  var value = ngettext(context + '' + singular, context + '' + plural, count);
  if (value.indexOf('') != -1) {
    value = ngettext(singular, plural, count);
  }
  return value;
}

function interpolate(fmt, obj, named) {
  if (named) {
    return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
  } else {
    return fmt.replace(/%s/g, function(match){return String(obj.shift())});
  }
}

/* formatting library */

var formats = new Array();

formats['DATETIME_FORMAT'] = 'j E Y \u0433. G:i:s';
formats['DATE_FORMAT'] = 'j E Y \u0433.';
formats['DECIMAL_SEPARATOR'] = ',';
formats['MONTH_DAY_FORMAT'] = 'j F';
formats['NUMBER_GROUPING'] = '3';
formats['TIME_FORMAT'] = 'G:i:s';
formats['FIRST_DAY_OF_WEEK'] = '1';
formats['TIME_INPUT_FORMATS'] = ['%H:%M:%S', '%H:%M'];
formats['THOUSAND_SEPARATOR'] = '\u00a0';
formats['DATE_INPUT_FORMATS'] = ['%d.%m.%Y', '%d.%m.%y', '%Y-%m-%d'];
formats['YEAR_MONTH_FORMAT'] = 'F Y \u0433.';
formats['SHORT_DATE_FORMAT'] = 'd.m.Y';
formats['SHORT_DATETIME_FORMAT'] = 'd.m.Y H:i';
formats['DATETIME_INPUT_FORMATS'] = ['%d.%m.%Y %H:%M:%S', '%d.%m.%Y %H:%M', '%d.%m.%Y', '%d.%m.%y %H:%M:%S', '%d.%m.%y %H:%M', '%d.%m.%y', '%Y-%m-%d %H:%M:%S', '%Y-%m-%d %H:%M', '%Y-%m-%d'];

function get_format(format_type) {
    var value = formats[format_type];
    if (typeof(value) == 'undefined') {
      return msgid;
    } else {
      return value;
    }
}
