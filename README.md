# jspsych-audlexdec-ap
Auditory [Lexical Decision](https://en.wikipedia.org/wiki/Lexical_decision_task) Experiment with Auditory Prime (template)

# Generic documentation
Please read the [generic documentation](https://github.com/UiL-OTS-labs/jspsych-uil-template-docs) for some context and scope.

# Task Description
One of the variations of an Auditory Lexical Decision task. In this variation, a trial consists of two connected auditory 'test items', one is an auditory _prime_ word (or non-word), the other a second word (or non-word). The words are presented as a pair. After the second word, the participant is asked to respond --as soon as possible -- with keyboard keys and indicate wether _both_ heard words are real words or not.

Crucial trial phases (sub trial phases):
- Fixation cross
- Auditory prime
- Auditory decision (decision phase)


### Reference:
        Rubenstein, H., Garfield, L., & Millikan, J.A. (1970). 
        Homographic entries in the internal lexicon. 
        Journal of Verbal Learning and Verbal Behavior, 9, 487≠494.

# Output
The data of _all_ (sub) _trial phases_ are logged in the data, but the output data can be filtered after data collection in many ways.
Please read the [general primer on jsPsych's data](https://github.com/UiL-OTS-labs/jspsych-output) if you are new to jsPsych data output.

Essential output variables are:

- Reaction Time (RT) of the keyboard response in the decision phase
- Correctness of the keyboard response in the decision phase

The crucial trial/sub-trial phase (decision phase) output may look similar to this:

```json
	{
		"rt": 1057,
		"stimulus": "./sounds/hot.wav",
		"key_press": 65,
		"condition": "UNRELATED",
		"word": "hot",
		"word_file": "./sounds/hot.wav",
		"prime": "stapler",
		"prime_file": "./sounds/stapler.wav",
		"id": 2,
		"trial_phase": "present_word",
		"useful_data_flag": true,
		"correct_response": 1,
		"trial_type": "audio-keyboard-response",
		"trial_index": 16,
		"time_elapsed": 55755,
		"internal_node_id": "0.0-8.0-2.1",
		"subject": "m1aha7y1",
		"list": "my_one_and_only_list",
		"correct": true,
		"key_chosen_ascii": 65,
		"key_chosen_char": "A",
		"yes_key": "A",
		"no_key": "L"
	},
	//(...)
```
Variable name (key) | Description          | Unit  | Type           | Comments                             | jsPsych default | Template default | Plugin name
--------------------|----------------------|-------|----------------|--------------------------------------|-----------------|------------------|------------
"rt"                | Reaction Time        | ms.   | float          | Reaction time in milliseconds        | yes             |                  |            
stimulus"           | stimulus (html)      |       | string/html    |                                      | yes             |                  |
"key_press"         | Keyboard response    |       | string/object? | https://en.wikipedia.org/wiki/ASCII  | yes             |                  | html-keyboard-response
"condition"         | Condition            |       | string         | See ```stimuli.js```                 | no              | yes              |
"word"              | Decision phase item  |       | string/html    | See ```stimuli.js, index.html```     | no              | yes              | 
"word_file"         | Filename for "word"  |       | string         | For instance "./sounds/hot.wav".     | no              | yes              |
"prime"             | Prime phase item     |       | string/html    | (...)                                | no              | yes              |
"prime_file"        | Filename for "prime" |       | string         | For instance "./sounds/hot.wav".     | no              | yes              |
"id"                | ID/code              |       |                | (...)                                | yes             |                  |
"trial_phase"       | Trial phase          |       |                | (...)                                | no              | yes              | 
"useful_data_flag"  | Filter flag          |       | boolean        |                                      | no              | yes              | 
_"expected_answer"_ | TODO change!         |       | todo           | Now (still) named "correct_response" | no              | no/yes/willbe.   | 
"trial_type"        | What plugin was used |       |                |                                      | yes             |                  | "html-keyboard-response"
"trial_index"       | jsPsych index        |       |                |                        	           | yes             |                  |	
"time_elapsed".     | jsPsych time object  | ms?   | int (/float?)  | For instance: 45062                  | yes             |                  |
"internal_node_id.  | jsPsych node object  |       |                | For instance:"0.0-11.0-1.4"          | yes             |                  |
"subject"           | Subject ID           |       |                | For instance: "8oo722dq"             |                 | yes              |
"list"              | Stimulus list name.  |       | string         | For instance: "my_one_and_only_list" | no              | yes              | 
"correct"           | Scoring result       |       | Boolean        | 'true or false' score of response    |                 | yes              |   
"key_chosen_ascii"  |                      |       |                | For instance: 65                     | no              | yes              |
"key_chosen_char"   |                      |       |                | For instance: "A"                    | no              | yes              |
"yes_key"           |                      |       |                | For instance:  "A"                   | no              | yes              |
"no_key"            |                      |       |                | For instance: "L"                    | no              | yes              |


# Getting started 
People _affiliated with our lab_ can use the information [from our lab webiste](https://uilots-labs.wp.hum.uu.nl/experiments/overview/) and expand the "Online experiments using jsPsych" section for details. Please follow [this how-to](https://uilots-labs.wp.hum.uu.nl/how-to/online-experimenting/).

### Make your experiment ready for use with the data server

### Update access key
In the file `globals.js` is a variable:
```javascript
const ACCESS_KEY = '00000000-0000-0000-0000-000000000000';
```
Before uploading your experimentto the UiL-OTS data server, you will need to change this to the access_key that you obtained when your experiment was approved. For elaborate info see `globals.js`.


### Adapting stimuli
- Open the file `stimuli.js` in your plain text editor.
- There is a list, called LIST_1:

```javacript
const LIST_1 = [ // stimuli and timeline variables

```
-  This list can be adapted to your own needs, i.e, you can replace values, make the list longer (don't forget to increment the 'id' values for new items!).
- If you need to implement a more complex design, you should read the `stimuli.js` file (and its comment sections) a little better. 
- For an example of a Latin square design, please have a look [here](https://github.com/UiL-OTS-labs/jspsych-spr-mw).

