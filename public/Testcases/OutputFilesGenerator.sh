<<DESCRIPTIONOFSCRIPT
	
	1. First of All The Location Of The Script Would be Like in a Directory Having
		a. Script File
		b. Runner.Java
		c. Solution.Java
		d. TestCases folder
	2. Testcases folder would comprise of large and small folder.
	3. large Folder should comprise of 
		a. in folder (input files)
	4. small folder shoud comprise of
		a. in folder (input files)
	5. Let me go through some steps how the script is working
	6. For Small Input Files
		a. First I calculate how many total small input files are there in (Testcases/small/input folder).
		b. Then i created the directory named out in the small folder which will store the output files.
		c. Then for each input file i compiled and ran the code through java .
		d. Then I put the output in the Output file .
	7. For Large Input Files
		a. First I calculate how many total large input files are there in (Testcases/large/input folder).
		b. Then i created the directory named out in the large folder which will store the output files.
		c. Then for each input file i compiled and ran the code through java.
		d. Then put the output in the Output file .
DESCRIPTIONOFSCRIPT>>


clear
echo "--- Starting Script ---"

if [[ ! -d "Testcases" ]]; then
	echo "Testcases Folder doesn't exist"
	exit
fi

if [[ ! -d "Testcases/small" ]]; then
    echo "Small Folder doesn't exist in Testcases"
    exit
fi

if [[ ! -d "Testcases/small/in" ]]; then
	echo "Input Folder doesn't exist in small folder"
	exit
fi

if [[ ! -d "Testcases/large" ]]; then
	echo "Large Folder doesn't exist in Testcases "
	exit
fi

if [[ ! -d "Testcases/large/in" ]]; then
	echo "Input folder doesn't exist in large folder"
	exit
fi

if [[ ! -f "runner.java" ]]; then
    echo "Runner File Not Found"
    exit
fi

totalSmallFiles=$(ls -q Testcases/small/in| grep -c '\.txt$')
currentFileNumber=1
mkdir Testcases/small/out
while [ $currentFileNumber -le $totalSmallFiles ] 
	do
		OUTPUT_FILE="Testcases/small/out/output"$currentFileNumber".txt"
		INPUT_FILE="Testcases/small/in/input"$currentFileNumber".txt"
		echo $OUTPUT_FILE
		javac runner.java
		java runner < $INPUT_FILE> $OUTPUT_FILE
		currentFileNumber=`expr $currentFileNumber + 1`
done


totalLargeFiles=$(ls -q Testcases/large/in| grep -c '\.txt$')
currentFileNumber=1
mkdir Testcases/large/out
while [ $currentFileNumber -le $totalLargeFiles ] 
	do
		OUTPUT_FILE="Testcases/large/out/output"$currentFileNumber".txt"
		INPUT_FILE="Testcases/large/in/input"$currentFileNumber".txt"
		echo $OUTPUT_FILE
		javac runner.java
		java runner < $INPUT_FILE> $OUTPUT_FILE
		currentFileNumber=`expr $currentFileNumber + 1`
done



echo "---- FINISHED ----"
