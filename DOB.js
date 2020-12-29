var dob_entry = getTextValue();
var split_dob = dob_entry.split("/");
var month = split_dob[0];
var day = split_dob[1];
var year = split_dob[2];
var ageValue = 0;
var condition1 = parseInt(month+day);

var today_date = new Date();
var today_year = (today_date.getFullYear()).toString();
var today_day = (today_date.getDate()).toString();
var today_month= (today_date.getMonth()+1).toString();
var condition2 = parseInt(today_month+today_day);

if(condition2>=condition1)
{
ageValue = parseInt(today_year-parseInt(year));
}
else
{
ageValue = parseInt(today_year-parseInt(year)-1);
}

if(14<=ageValue && ageValue<=24)
{ Qualtrics.SurveyEngine.setEmbeddedData('Validity',1);
alert('Valid age.');
}
else
{ Qualtrics.SurveyEngine.setEmbeddedData('Validity',0);
alert('Invalid age.');
}